import { Controller, Get, UseFilters } from '@nestjs/common';
import { ScrapperService } from './scrapper.service';
import { Cron, CronExpression } from '@nestjs/schedule';
import { HttpExceptionFilter } from 'src/http-exception.filter';

@Controller()
export class ScrapperController {
  constructor(private readonly scrapperService: ScrapperService) {}

  @Get('scrape')
  @Cron(CronExpression.EVERY_HOUR)
  @UseFilters(HttpExceptionFilter)
  scrape() {
    return this.scrapperService.scrape();
  }
}
