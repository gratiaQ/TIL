import { Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ApiQuery, ApiParam, ApiTags } from '@nestjs/swagger';

@ApiTags('DMS')
@Controller('api/workspaces/:url/dms')
export class DmsController {
  @ApiParam({
    name: 'id',
    required: true,
    description: '사용자 ID',
  })
  @ApiParam({
    name: 'url',
    required: true,
    description: '워크스페이스 url',
  })
  @ApiQuery({
    name: 'perPage',
    required: true,
    description: '한 번에 가져오는 개수',
  })
  @ApiQuery({
    name: 'page',
    required: true,
    description: '불러오는 페이지',
  })
  @Get(':param/chats')
  getChat(@Query() query, @Param() param) {
    console.log(query.perPage, query.page);
    console.log(param.id, param.url);
  }

  @Post(':id/chats')
  postChat() {}
}
