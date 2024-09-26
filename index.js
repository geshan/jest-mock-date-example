import { getDayOfYear } from './src/dateHelper.js';

console.log(`Today is day ${getDayOfYear()} / 365 days of this year ${new Date().getFullYear()}.`);
