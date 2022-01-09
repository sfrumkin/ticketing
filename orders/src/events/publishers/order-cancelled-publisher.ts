import { Subjects, Publisher, OrderCancelledEvent } from "@sfrumkintemp/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent>{
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}