import { getDayOfYear, startOfToday } from 'date-fns';

export function getYearToDateInDays() {
  return getDayOfYear(new Date());
}
