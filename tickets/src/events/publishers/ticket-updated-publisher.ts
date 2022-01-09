import { Publisher, Subjects, TicketUpdatedEvent } from "@sfrumkintemp/common";

export class TicketUpdatedPublisher extends Publisher <TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}