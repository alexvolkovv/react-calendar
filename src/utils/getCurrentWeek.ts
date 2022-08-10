import { getWeeksInMonth } from "./getWeeksInMonth";

export function getCurrentWeek(
  month: number,
  day: number,
  year: number
): number {
  const weeks: number = getWeeksInMonth(month, year);
  let week = 1;

  while (week <= weeks) {
    let lastDayInWeek = week * 7;

    if (day <= lastDayInWeek) {
      return week;
    }

    week++;
  }

  return week;
}
