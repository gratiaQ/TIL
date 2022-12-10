/// <reference types="multer" />
import { Cat } from './cats.schema';
import { LoginRequestDto } from './../auth/dto/login.request.dto';
import { AuthService } from './../auth/auth.service';
import { CatsService } from './cats.service';
import { CatRequestDto } from './dto/cats.request.dto';
export declare class CatsController {
    private readonly catsService;
    private readonly authService;
    constructor(catsService: CatsService, authService: AuthService);
    getCurrentCat(cat: any): any;
    signUp(body: CatRequestDto): Promise<{
        id: string;
        email: string;
        name: string;
        imgUrl: string;
    }>;
    logIn(data: LoginRequestDto): Promise<{
        token: string;
    }>;
    uploadCatImg(images: Array<Express.Multer.File>, cat: Cat): any;
}
