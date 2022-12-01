import { Module } from '@nestjs/common';
import { DmsController } from './controllers/dms.controller';
import { DmsService } from './services/dms.service';

@Module({
  controllers: [DmsController],
  providers: [DmsService],
})
export class DmsModule {}
