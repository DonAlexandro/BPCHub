import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { CategoryModule } from './contexts/category';
import { ScrapperModule } from './kernel/scrapper';
import { TagModule } from './contexts/tag';
import { ArticleModule } from './contexts/article';

@Module({
  imports: [CategoryModule, ScrapperModule, TagModule, ArticleModule, ScheduleModule.forRoot()],
  controllers: [],
  providers: [],
})
export class AppModule {}
