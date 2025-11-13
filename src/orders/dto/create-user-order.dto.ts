import { Type } from "class-transformer";
import { IsArray, IsNotEmpty, IsString, validate, ValidateNested } from "class-validator";
import { OrderItemDto } from "./order-item.dto";

export class CreateUserOrderDto {
  @IsString()
  @IsNotEmpty()
  userId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => OrderItemDto)
  orders: OrderItemDto[];
}