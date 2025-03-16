import { v4 } from "uuid"

export interface PrimitivePayment {
  id          : string
  amount      : number,
  date        : Date,
  customerId  : string,
} 

export class Payment {
  constructor(
    private attributes : PrimitivePayment
  ) {}

  static create(createPayment : {
    amount      : number,
    customerId  : string,
  }): Payment {
    return new Payment({
      id: v4(),
      amount: createPayment.amount,
      date : new Date(),
      customerId: createPayment.customerId
    })
  }

  update(updatePayment : {
    amount : number
  }) : Payment {
    this.attributes.amount = updatePayment.amount;
    return this
  }

  toValue(): PrimitivePayment{
    return{
      id          : this.attributes.id,
      amount      : this.attributes.amount,
      date        : this.attributes.date,
      customerId  : this.attributes.customerId
    }
  }
}