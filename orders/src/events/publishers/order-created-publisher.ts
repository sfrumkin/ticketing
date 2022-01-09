import { Publisher, OrderCreatedEvent, Subjects } from "@sfrumkintemp/common";


  export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent>{
    subject: Subjects.OrderCreated = Subjects.OrderCreated;
  }

