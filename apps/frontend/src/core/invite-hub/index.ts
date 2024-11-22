import Event from "./model/Event";
import Guest from "./model/Guest";

import complementGuest from "./functions/complementGuest";
import complementEvent from "./functions/complementEvent";
import createEmptyEvent from "./functions/createEmptyEvent";
import createEmptyGuest from "./functions/createEmptyGuest";

export type { Event, Guest };
export {
  complementGuest,
  complementEvent,
  createEmptyEvent,
  createEmptyGuest,
}