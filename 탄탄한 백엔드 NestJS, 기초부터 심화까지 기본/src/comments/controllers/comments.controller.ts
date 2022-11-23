import { CommentsCreateDto } from './../dto/comments.create.dto';
import { CommentsService } from './../services/comments.service';
import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @ApiOperation({
    summary: 'Get all comments',
    description: 'Get all comments',
  })
  @Get()
  async getAllComments() {
    return this.commentsService.getAllComments();
  }

  @ApiOperation({
    summary: 'Get a comment by id',
  })
  @Post(':id')
  async getCreateComments(
    @Param('id') id: string,
    @Body() body: CommentsCreateDto,
  ) {
    return this.commentsService.createComment(id, body);
  }

  @ApiOperation({
    summary: 'like up',
  })
  @Patch(':id')
  async plusLike(@Param('id') id: string) {
    return this.commentsService.plusLike(id);
  }
}
