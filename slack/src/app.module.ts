import { ConfigModule } from '@nestjs/config';
import { LoggerMiddleware } from './../../탄탄한 백엔드 NestJS, 기초부터 심화까지 기본/src/common/middlewares/logger.middleware';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ChannelsModule } from './channels/channels.module';
import { DmsModule } from './dms/dms.module';
import { WorkspacesModule } from './workspaces/workspaces.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    UsersModule,
    ChannelsModule,
    DmsModule,
    WorkspacesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    // forRoutes(controller or url) 특정 위치에만 적용도 가능
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
