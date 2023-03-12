import { getCurrentDate, getDaysWeek } from "@helpers/date";
import { expect } from "../helper/helper";

describe('Date helper', () => {
    describe('getCurrentDate', () => {
        it('should return a Date object', () => {
          const currentDate = getCurrentDate();
          expect(currentDate instanceof Date).to.be.true;
        });
      });
      
      describe('getDaysWeek', () => {
        it('should return an array of DayWeek objects', () => {
          const daysWeek = getDaysWeek();
          expect(Array.isArray(daysWeek)).to.be.true;
          expect(daysWeek[0]).to.has.property('name')
          expect(daysWeek[0]).to.has.property('number')
        });
      });
})
