/// <reference types="multer" />
import { CatsRepository } from './../cats.repository';
import { Cat } from './../cats.schema';
import { CatRequestDto } from './../dto/cats.request.dto';
export declare class CatsService {
    private readonly catsRepository;
    constructor(catsRepository: CatsRepository);
    signUp(body: CatRequestDto): Promise<{
        id: string;
        email: string;
        name: string;
        imgUrl: string;
    }>;
    uploadImg(cat: Cat, files: Express.Multer.File[]): Promise<{
        id: string;
        email: string;
        name: string;
        imgUrl: string;
    }>;
    getAllCat(): Promise<Omit<Cat & {
        _id: import("mongoose").Types.ObjectId;
    }, never>[]>;
}
