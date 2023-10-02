import { Module } from '@nestjs/common';
import { ArticleService } from './article.service';

@Module({
  controllers: [],
  providers: [ArticleService],
})
export class ArticleModule {}
