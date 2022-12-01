import { UndefindedToNullInterceptor } from './../../common/interceptors/undefinedToNull.interceptor';
import { UserDTO } from './../../../../TypeORM with NestJS/src/users/dtos/user.dto';
import { JoinRequestDto } from './../dto/join.request.dto';
import { Body, Controller, Get, Post, UseInterceptors } from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from 'src/common/decorator/user.decorator';

@UseInterceptors(UndefindedToNullInterceptor)
@ApiTags('User')
@Controller('api/users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @ApiResponse({
    type: UserDTO,
  })
  @ApiOperation({
    summary: '내 정보 조회',
  })
  @Get()
  getUsers(@User() user) {
    return user;
  }

  @ApiOperation({
    summary: '회원가입',
  })
  @Post()
  join(@Body() body: JoinRequestDto) {
    this.userService.join(body.email, body.nickname, body.password);
    return undefined;
  }

  @ApiResponse({
    status: 200,
    description: 'Success',
    type: UserDTO,
  })
  @ApiOperation({
    summary: '로그인',
  })
  @Post('login')
  logIn(@User() user) {
    return user;
  }

  @ApiOperation({
    summary: '로그아웃',
  })
  @Post('logout')
  logOut() {}
}
