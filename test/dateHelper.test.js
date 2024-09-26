import { getYearToDateInDays } from '../src/dateHelper.js';

describe('dateHelper - Jest 26+', () => {
  //Jest 26 was released in May 2020, ref: https://github.com/jestjs/jest/releases/tag/v26.0.0
  describe('getYearToDateInDays', () => {
    beforeEach(() => {
      jest.useFakeTimers().setSystemTime(new Date('2024-01-07'));
    });
    afterEach(() => {
      jest.setSystemTime(jest.getRealSystemTime());
    });

    it('should return 7 for January 7th as set with fake timer and system date', () => {      
      const result = getYearToDateInDays();
      expect(result).toBe(7);
    });    
  });
});
// another way to test this can be with jest.mock('date-fns', () => ({getDayOfYear: jest.fn().mockReturnValue(7)}));
// but that defeats the purpose of testing the date mock
