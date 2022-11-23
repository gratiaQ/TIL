import { Cat } from '../cats.Schema';
import { multerOptions } from './../../common/utils/multer.options';
import { JwtAuthGuard } from './../../auth/jwt/jwt.guard';
import { LoginRequestDto } from './../../auth/dto/login.request.dto';
import { AuthService } from './../../auth/auth.service';
import { ReadOnlyCatDto } from './../dto/cat.dto';
import { SuccessInterceptor } from './../../common/interceptors/success.interceptor';
import { PositiveIntPipe } from './../../common/pipes/positiveInt.pipe';
import { HttpExceptionFilter } from '../../common/exceptions/http-exception.filter';
import { CatsService } from './../services/cats.service';
import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  UploadedFiles,
  UseFilters,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { CatRequestDto } from './../dto/cats.request.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { CurrentUser } from 'src/common/decorators/user.decorator';

@Controller('cats')
@UseInterceptors(SuccessInterceptor)
@UseFilters(HttpExceptionFilter)
export class CatsController {
  constructor(
    private readonly catsService: CatsService,
    private readonly authService: AuthService,
  ) {}

  @ApiOperation({
    summary: 'get cats',
  })
  @UseGuards(JwtAuthGuard)
  @Get()
  // getCurrentCat(@Req() req: Request) {
  //   console.log(req.user);
  //   return req;
  // }
  getCurrentCat(@CurrentUser() cat) {
    return cat.readOnlyData;
  }

  @ApiResponse({
    status: 500,
    description: 'Server Error...',
  })
  @ApiResponse({
    status: 200,
    description: 'Success',
    type: ReadOnlyCatDto,
  })
  @ApiOperation({
    summary: 'signUp',
  })
  @Post()
  async signUp(@Body() body: CatRequestDto) {
    return await this.catsService.signUp(body);
  }
  @Post('login')
  logIn(@Body() data: LoginRequestDto) {
    return this.authService.jwtLogIn(data);
  }
  @Post('upload')
  @UseInterceptors(FilesInterceptor('images', 10, multerOptions('cats')))
  @UseGuards(JwtAuthGuard)
  uploadCatImg(
    @UploadedFiles() images: Array<Express.Multer.File>,
    @CurrentUser() cat: Cat,
  ) {
    return this.catsService.uploadImg(cat, images);
  }

  @ApiOperation({
    summary: 'get all cats',
  })
  @UseGuards(JwtAuthGuard)
  @Get('all')
  getAllCat() {
    return this.catsService.getAllCat();
  }
}
