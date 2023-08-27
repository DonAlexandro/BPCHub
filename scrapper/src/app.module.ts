import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { CategoryModule } from './category';
import { ScrapperModule } from './scrapper';
import { TagModule } from './tag';
import { ArticleModule } from './article';

@Module({
  imports: [CategoryModule, ScrapperModule, TagModule, ArticleModule, ScheduleModule.forRoot()],
  controllers: [],
  providers: [],
})
export class AppModule {}
