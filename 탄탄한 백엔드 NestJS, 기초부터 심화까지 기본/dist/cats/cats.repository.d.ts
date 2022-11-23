import { CatRequestDto } from './dto/cats.request.dto';
import { Model, Types } from 'mongoose';
import { Cat } from './cats.schema';
export declare class CatsRepository {
    private readonly catModel;
    constructor(catModel: Model<Cat>);
    findByIdAndUpdateImg(id: string, fileName: string): Promise<{
        id: string;
        email: string;
        name: string;
        imgUrl: string;
    }>;
    findCatByIdWithoutPassword(catId: string | Types.ObjectId): Promise<Cat | null>;
    findCatByEmail(email: string): Promise<Cat | null>;
    existByEmail(email: string): Promise<boolean>;
    create(cat: CatRequestDto): Promise<Cat>;
    findAll(): Promise<Omit<Cat & {
        _id: Types.ObjectId;
    }, never>[]>;
}
