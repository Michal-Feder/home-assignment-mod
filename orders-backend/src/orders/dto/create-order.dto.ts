import { IsEmail, IsNotEmpty, IsArray, ValidateNested, IsString, IsInt } from 'class-validator';
import { Type } from 'class-transformer';

class OrderItemDto {
  @IsString() @IsNotEmpty() productName: string;
  @IsInt() quantity: number;
}

export class CreateOrderDto {
  @IsString() @IsNotEmpty() fullName: string;
  @IsString() @IsNotEmpty() address: string;
  @IsEmail() email: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => OrderItemDto)
  items: OrderItemDto[]; 
}