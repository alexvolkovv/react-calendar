import { TimeType } from "../models/TimeType";
import { isSameDay } from "./isSameDay";

export function isSameTime(
  firstTime: TimeType | null,
  secondTime: TimeType | null
): boolean {
  return (
    firstTime?.time === secondTime?.time &&
    isSameDay(firstTime?.day!, secondTime?.day!)
  );
}
