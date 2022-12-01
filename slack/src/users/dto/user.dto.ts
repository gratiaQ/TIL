import { JoinRequestDto } from './join.request.dto';
import { ApiProperty } from '@nestjs/swagger';
export class UserDTO extends JoinRequestDto {
  @ApiProperty({
    required: true,
    example: 1,
    description: '아이디',
  })
  id: number;
}
