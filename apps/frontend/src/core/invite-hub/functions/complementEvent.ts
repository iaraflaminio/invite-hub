import { Id, Password } from "@/core/shared";
import Event from "../model/Event";
import validateEvent from "./validateEvent";

export default function complementEvent(
  complementEvent: Partial<Event>
): Event {
  const errors = validateEvent(complementEvent);

  if (errors.length) {
    throw new Error(errors.join("\n"));
  }

  const event: Event = {
    ...complementEvent,
    id: complementEvent.id ?? Id.new(),
    password: complementEvent.password ?? Password.generate(20),
    expectedAudience: +(complementEvent.expectedAudience ?? 1),
  } as Event;

  return event;
}
