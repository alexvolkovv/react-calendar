import { DayType } from "../models/DayType";

export function isSameDay(
  firstDay: DayType | null,
  secondDay: DayType | null
): boolean {
  return (
    firstDay?.day === secondDay?.day &&
    firstDay?.year === secondDay?.year &&
    firstDay?.month === secondDay?.month
  );
}
