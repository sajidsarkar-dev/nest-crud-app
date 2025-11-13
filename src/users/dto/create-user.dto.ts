import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto {
  
  readonly id?: number;

  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  @IsString()
  readonly password: string;
}