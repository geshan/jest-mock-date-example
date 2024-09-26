import { getDayOfYear } from '../src/dateHelper.js';

describe('dateHelper - Jest 26+', () => {
  //Jest 26 was released in May 2020, ref: https://github.com/jestjs/jest/releases/tag/v26.0.0
  describe('getDayOfYear', () => {
    beforeEach(() => {
      jest.useFakeTimers().setSystemTime(new Date('2024-01-07'));
    });
    afterEach(() => {
      jest.setSystemTime(jest.getRealSystemTime());
    });

    it('should return 7 for 7-Jan as set with fake timers and system date', () => {      
      const result = getDayOfYear();
      expect(result).toBe(7);
    });    
  });
});
