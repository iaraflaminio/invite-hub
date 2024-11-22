import { Id } from "@/core/shared";
import Event from "../model/Event";

export default function createEmptyEvent(): Partial<Event> {
  return {
    id: Id.new(),
    name: "",
    description: "",
    date: new Date(),
    location: "",
    expectedAudience: 1,
    image: "",
    backgroundImage: "",
  };
};