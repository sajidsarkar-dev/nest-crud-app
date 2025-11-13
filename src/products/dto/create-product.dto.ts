import { IsNotEmpty, IsNumber, IsNumberString, IsString } from "class-validator";

export class CreateProductDto {
  readonly id?: number;
  
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsNumber()
  @IsNumberString()
  readonly price: number;
}