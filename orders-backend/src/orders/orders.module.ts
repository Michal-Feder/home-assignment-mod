import { Module } from '@nestjs/common';
import { ElasticsearchModule } from '@nestjs/elasticsearch';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';

@Module({
  imports: [
    ElasticsearchModule.register({
      node: 'http://localhost:9200', 
    }),
  ],
  controllers: [OrdersController], 
  providers: [OrdersService],     
})
export class OrdersModule {}