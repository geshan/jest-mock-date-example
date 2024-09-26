import { getYearToDateInDays } from './src/dateHelper.js';

console.log(`Today is day ${getYearToDateInDays()} / 365 days of this year ${new Date().getFullYear()}.`);
