import { Module } from '@nestjs/common';
import { ElasticsearchModule } from '@nestjs/elasticsearch';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [
    ElasticsearchModule.register({
      node: 'http://localhost:9200', 
    }),
    OrdersModule,
  ],
})
export class AppModule {}