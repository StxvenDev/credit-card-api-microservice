import { Payment } from "./payment";

export abstract class PaymentRepository {

  abstract create(payment : Payment) : Promise<void>;

  abstract getById(id : string) : Promise<Payment | null>;

  abstract update(amount : number, id : string) : Promise<Payment>;
  
}