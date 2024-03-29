import { Users } from '../../Entities/Users';
import { PickType } from '@nestjs/swagger';

export class JoinRequestDto extends PickType(Users, [
  'email',
  'nickname',
  'password',
] as const) {}
