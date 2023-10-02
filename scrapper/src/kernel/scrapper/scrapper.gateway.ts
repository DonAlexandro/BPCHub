import { Injectable } from '@nestjs/common';
import { SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';
import { ExtendedArticle } from 'src/contexts/article';
import { SingleResponse } from 'src/shared/types';

@WebSocketGateway()
@Injectable()
export class ScrapperGateway {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('articles')
  sendArticlesUpdate(articles: SingleResponse<ExtendedArticle>[]) {
    this.server.emit('articles', articles);
  }
}
