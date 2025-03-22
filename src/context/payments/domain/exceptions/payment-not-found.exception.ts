import { NotFoundException } from "@nestjs/common";

export class PaymentNotFoundException extends NotFoundException {
  constructor( public readonly id : string ){
    super(`Payment not found with ${id}`)
  }
}