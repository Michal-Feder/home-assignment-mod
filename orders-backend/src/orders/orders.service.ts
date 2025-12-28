import { Injectable, OnModuleInit, Logger } from '@nestjs/common';
import { ElasticsearchService } from '@nestjs/elasticsearch';
import { CreateOrderDto } from './dto/create-order.dto';
import * as mappingData from '../config/elastic-mapping.json'; 

@Injectable()
export class OrdersService implements OnModuleInit {
  private readonly logger = new Logger(OrdersService.name);

  constructor(private readonly elasticsearchService: ElasticsearchService) {}

  async onModuleInit() {
    await this.createIndexWithMapping();
  }

  private async createIndexWithMapping() {
    const indexName = 'orders';
    try {
      const exists = await this.elasticsearchService.indices.exists({ index: indexName });
      if (!exists) {
        await this.elasticsearchService.indices.create({
          index: indexName,
          body: mappingData as any
        });
        this.logger.log(`Index "${indexName}" created successfully.`);
      }
    } catch (error) {
      this.logger.error('Error during index creation:', error.message);
    }
  }

  async createOrder(orderDto: CreateOrderDto): Promise<any> {
    this.logger.log('--- Step 1: Service received order, sending to Elastic ---');
    
    try {
      const result = await this.elasticsearchService.index({
        index: 'orders',
        document: {
          ...orderDto,
          createdAt: new Date(),
        },
      });

      this.logger.log('--- Step 2: Elastic responded successfully! ---');
      return result;
    } catch (error) {
      this.logger.error('--- Step 3: Connection to Elastic failed! ---');
      this.logger.error(error.message);
      throw error;
    }
  }
}