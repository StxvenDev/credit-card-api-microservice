import { IsNotEmpty, IsUUID } from "class-validator";

export class GetPaymentHttpDto {
  @IsUUID()
  @IsNotEmpty()
  id: string;
}