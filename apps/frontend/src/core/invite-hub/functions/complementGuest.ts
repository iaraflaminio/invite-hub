import Guest from "../model/Guest";
import validateGuest from "./validateGuest";

export default function complementGuest(
  guest: Partial<Guest>
): Guest {
  const errors = validateGuest(guest);

  if (errors.length > 0) {
    throw new Error(errors.join("\n"));
  }

  const companionCount = guest.companionCount ?? 0;
  const hasCompanions =
    guest.hasCompanions &&
    guest.confirmed &&
    companionCount > 0;

  const updatedGuest = {
    ...guest,
    companionCount: hasCompanions ? companionCount : 0,
    hasCompanions: hasCompanions,
  };

  return updatedGuest as Guest;
}
