const expect = require('expect');
const {isRealString} = require('./validation');

//it's not non sync so no done param neccessery
describe('isRealString', () => {
  it('should reject non-string values', () => {
    let name = 234;
    let test = isRealString(name);

    expect(test).toBe(false);
  });

  it('should reject string with only spaces', () => {
      let name = '     ';
      let test = isRealString(name);

      expect(test).toBe(false);
  });

  it('should allow strings with non space characters', () => {
      let name="  lol123"
      let test = isRealString(name);

      expect(test).toBe(true);
  });
});
