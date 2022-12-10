import { Comments } from '../comments.schema';
declare const CommentsDto_base: import("@nestjs/common").Type<Pick<Comments, "author" | "contents">>;
export declare class CommentsDto extends CommentsDto_base {
}
export {};
