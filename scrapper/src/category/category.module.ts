import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';

@Module({
  controllers: [],
  providers: [CategoryService],
})
export class CategoryModule {}
