import { Publisher, ExpirationCompleteEvent, Subjects } from "@sfrumkintemp/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent>{
  readonly subject = Subjects.ExpirationComplete;

}