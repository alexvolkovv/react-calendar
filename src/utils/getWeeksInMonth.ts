import { getDaysInMonth } from "./getDaysInMonth";

export function getWeeksInMonth(month: number, year: number) {
  const daysInMonth = getDaysInMonth(month, year);

  return Math.ceil(daysInMonth / 7);
}
