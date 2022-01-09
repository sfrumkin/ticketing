import { Publisher, Subjects, TicketCreatedEvent } from "@sfrumkintemp/common";

export class TicketCreatedPublisher extends Publisher <TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}