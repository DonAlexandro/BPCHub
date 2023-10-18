import { Module } from '@nestjs/common';
import { ScrapperService } from './scrapper.service';
import { ScrapperController } from './scrapper.controller';
import { CategoryService } from 'src/contexts/category';
import { ScrapeTemplate } from './templates';
import { TagService } from 'src/contexts/tag';
import { ArticleService } from 'src/contexts/article';
import { ScrapperGateway } from './scrapper.gateway';

@Module({
  controllers: [ScrapperController],
  providers: [ScrapperService, CategoryService, ScrapeTemplate, TagService, ArticleService, ScrapperGateway],
})
export class ScrapperModule {}
