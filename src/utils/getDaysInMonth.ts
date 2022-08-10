import moment from "moment";

export function getDaysInMonth(month: number, year: number): number {
  return moment([year, month]).daysInMonth();
}
