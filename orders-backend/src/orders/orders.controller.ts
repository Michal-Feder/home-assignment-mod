import { Body, Controller, Post, Logger, HttpException, HttpStatus } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  private readonly logger = new Logger('OrdersController');

  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  async create(@Body() createOrderDto: CreateOrderDto) {
    this.logger.log('Received new order request');

    try {
      const result = await this.ordersService.createOrder(createOrderDto);
      
      return {
        success: true,
        message: 'Order saved successfully',
        orderId: result._id, 
      };

    } catch (error) {
      this.logger.error('Failed to save order', error.stack);

      throw new HttpException({
        success: false,
        message: 'Failed to save order to database',
        error: error.message,
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}