import { Controller, Get, Param, Post, Query } from '@nestjs/common';

@Controller('api/workspaces/:url/channels')
export class ChannelsController {
  @Get('names/channels')
  getChannels(@Query() query, @Param() param) {}

  @Post('names/channels')
  createChannels() {}

  @Get('names/channels')
  getSpecificChannel(@Query() query, @Param() param) {}

  @Get(':names/chats')
  getChat() {}

  @Post(':names/chats')
  postChat() {}

  @Get(':names/members')
  invoteMembers() {}
}
