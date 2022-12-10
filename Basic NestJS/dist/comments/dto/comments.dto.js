"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentsDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const comments_schema_1 = require("../comments.schema");
class CommentsDto extends (0, swagger_1.PickType)(comments_schema_1.Comments, [
    'author',
    'contents',
]) {
}
exports.CommentsDto = CommentsDto;
//# sourceMappingURL=comments.dto.js.map