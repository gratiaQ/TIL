import { OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { Model } from 'mongoose';
import { Socket } from 'socket.io';
import { Chatting } from './models/chattings.model';
import { Socket as SocketModel } from './models/sockets.model';
export declare class ChatsGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
    private readonly chattingModel;
    private readonly socketModel;
    private logger;
    constructor(chattingModel: Model<Chatting>, socketModel: Model<SocketModel>);
    afterInit(): void;
    handleConnection(socket: Socket): void;
    handleDisconnect(socket: Socket): Promise<void>;
    handleNewUser(username: string, socket: Socket): Promise<string>;
    handleSubmitChat(chat: string, socket: Socket): Promise<void>;
}
