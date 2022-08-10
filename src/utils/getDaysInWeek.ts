import { getWeeksInMonth } from "./getWeeksInMonth";
import moment from "moment";
import { getDaysInMonth } from "./getDaysInMonth";
import { DayType } from "../models/DayType";

export function getDaysInWeek(
  month: number,
  week: number,
  year: number
): DayType[] {
  const weeks = getWeeksInMonth(month, year);
  const firstDayInWeek = week * 7 - 7 + 1;
  const date = moment([year, month, firstDayInWeek]);
  const allDays = getDaysInMonth(month, year);
  const days: number[] = [];
  let weekStartDay;
  let weekEndDay;

  if (weeks === week) {
    weekStartDay = allDays - 6;
    weekEndDay = allDays;
  } else if (week == 1) {
    weekStartDay = 1;
    weekEndDay = 7;
  } else {
    weekStartDay = +date.clone().startOf("isoWeek").format("DD");
    weekEndDay = +date.clone().endOf("isoWeek").format("DD");
  }

  for (let i = weekStartDay; i <= weekEndDay; i++) {
    days.push(i);
  }

  return days.map((dayIndex): DayType => {
    return {
      day: dayIndex,
      year: year,
      month: month,
    };
  });
}
