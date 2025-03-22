import { IsNotEmpty, IsUUID } from "class-validator";

export class DeletePaymentHttpDto {

  @IsUUID()
  @IsNotEmpty()
  id: string;
}