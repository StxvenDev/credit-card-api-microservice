import { Payment, PrimitivePayment } from '../../domain/payment';
import { PaymentRepository } from "../../domain/payment.repository";

export class InMemoryPaymentRepository extends PaymentRepository{
  private payments: PrimitivePayment[] = [];
  async create(payment: Payment): Promise<void> {
      this.payments.push(payment.toValue());
  }

  async getById(id: string): Promise<Payment | null> {
      const payment = this.payments.find(payment => payment.id === id);
      return payment ? new Payment(payment) : null;
  }

  async update(amount: number, id: string): Promise<Payment | null> {
      const payment = this.payments.find(payment => payment.id === id);
      payment.amount = amount;
      return payment ? new Payment(payment) : null;
  }

  async delete(id: string): Promise<void> {
      const payments = this.payments.filter(payment => payment.id != id);
      this.payments = payments;
      return;
  }
}