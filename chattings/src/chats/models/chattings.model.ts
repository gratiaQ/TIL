import { Document, SchemaOptions, Types } from 'mongoose';
import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import { IsNotEmpty, IsString } from 'class-validator';
import { Socket as SocketModel } from './sockets.model';

const options: SchemaOptions = {
  timestamps: true,
  collection: 'chattings',
};

@Schema(options)
export class Chatting extends Document {
  @Prop({
    type: {
      _id: { type: Types.ObjectId, required: true, ref: 'sockets' },
      id: { type: String },
      username: { type: String, required: true },
    },
  })
  @IsNotEmpty()
  @IsString()
  user: SocketModel;

  @Prop({
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  chat: string;
}

export const ChattingSchema = SchemaFactory.createForClass(Chatting);
