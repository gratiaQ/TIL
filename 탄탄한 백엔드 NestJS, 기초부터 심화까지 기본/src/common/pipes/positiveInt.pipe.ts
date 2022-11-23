import { Injectable, PipeTransform, HttpException } from '@nestjs/common';

@Injectable()
export class PositiveIntPipe implements PipeTransform {
  transform(value: number) {
    if (value < 0) {
      throw new HttpException('value must be > 0', 400);
    }
    return value;
  }
}
