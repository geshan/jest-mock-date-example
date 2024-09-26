export function getDayOfYear() {
  const today = new Date();
  const todayInMs = Date.UTC(today.getFullYear(), today.getMonth(), today.getDate()); //today in milliseconds
  const startOfYearInMs = Date.UTC(today.getFullYear(), 0, 0);
  const diffInMs = todayInMs - startOfYearInMs;
  const msInOneMinute = 1000 * 60;
  const msInOneHour = msInOneMinute * 60; 
  const msInOneDay = msInOneHour * 24;

  return  diffInMs  / msInOneDay;
}
