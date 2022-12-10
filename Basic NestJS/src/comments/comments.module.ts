import { CatsModule } from './../cats/cats.module';
import { CatsRepository } from './../cats/cats.repository';
import { Comments, CommentsSchema } from './comments.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { CommentsService } from './services/comments.service';
import { CommentsController } from './controllers/comments.controller';
import { Module, forwardRef } from '@nestjs/common';

@Module({
  imports: [
    CatsModule,
    MongooseModule.forFeature([
      {
        name: Comments.name,
        schema: CommentsSchema,
      },
    ]),
  ],
  controllers: [CommentsController],
  providers: [CommentsService],
})
export class CommentsModule {}
