import { CatsRepository } from './../../cats/cats.repository';
import { Comments } from './../comments.schema';
import { CommentsCreateDto } from './../dto/comments.create.dto';
import { Model } from 'mongoose';
export declare class CommentsService {
    private readonly commentsModel;
    private readonly catsRepository;
    constructor(commentsModel: Model<Comments>, catsRepository: CatsRepository);
    getAllComments(): Promise<(Comments & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    createComment(id: string, commentData: CommentsCreateDto): Promise<Comments & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    plusLike(id: string): Promise<Comments & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
