import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class OrderItemDto {
  @IsNumber()
  id: number;

  @IsString()
  @IsNotEmpty()
  item: string;

  @IsNumber()
  @IsNotEmpty()
  amount: number;

  @IsString()
  paymentStatus?: string;
}