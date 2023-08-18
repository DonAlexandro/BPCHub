import { Module } from '@nestjs/common';
import { CategoryModule } from './category';
import { ScrapperModule } from './scrapper';
import { TagModule } from './tag';
import { ArticleModule } from './article';

@Module({
  imports: [CategoryModule, ScrapperModule, TagModule, ArticleModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
