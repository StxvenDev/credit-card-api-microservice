import { IsNotEmpty, IsNumber, IsUUID } from "class-validator";

export class UpdatePaymentHttpDto {
  @IsUUID()
  @IsNotEmpty()
  id!    : string;
  
  @IsNumber()
  @IsNotEmpty()
  amount : number;
}