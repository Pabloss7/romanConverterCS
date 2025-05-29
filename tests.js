// tests.js
// integerToRoman
//romanToInteger
// Use Chai's expect for assertions
const expect = chai.expect;

// tests.js
describe('integerToRoman', function(){
  it('should convert 1 to "I"', function() {
    expect(integerToRoman(1)).to.equal("I");
  });

  it('should convert 3 to "III"', function() {
    expect(integerToRoman(3)).to.equal("III");
  });

  it('should convert 4 to "IV"', function() {
    expect(integerToRoman(4)).to.equal("IV");
  });

  it('should convert 5 to "V"', function() {
    expect(integerToRoman(5)).to.equal("V");
  });

  it('should convert 9 to "IX"', function() {
    expect(integerToRoman(9)).to.equal("IX");
  });

  it('should convert 10 to "X"', function() {
    expect(integerToRoman(10)).to.equal("X");
  });

  it('should convert 20 to "XX"', function() {
    expect(integerToRoman(20)).to.equal("XX");
  });

  it('should convert 37 to "XXXVII"', function() {
    expect(integerToRoman(37)).to.equal("XXXVII");
  });

  it('should convert 49 to "XLIX"', function() {
    expect(integerToRoman(49)).to.equal("XLIX");
  });

  it('should convert 50 to "L"', function() {
    expect(integerToRoman(50)).to.equal("L");
  });

  it('should convert 100 to "C"', function() {
    expect(integerToRoman(100)).to.equal("C");
  });

  it('should convert 400 to "CD"', function() {
    expect(integerToRoman(400)).to.equal("CD");
  });

  it('should convert 1000 to "M"', function() {
    expect(integerToRoman(1000)).to.equal("M");
  });

  it('should convert 2499 to "MMCDXCIX"', function() {
    expect(integerToRoman(2499)).to.equal("MMCDXCIX");
  });

  // ChatGPT test definitions
  it('should convert 7 to "VII"', function() {
    expect(integerToRoman(7)).to.equal("VII");
  });

  it('should convert 58 to "LVIII"', function() {
    expect(integerToRoman(58)).to.equal("LVIII");
  });

  it('should convert 1994 to "MCMXCIV"', function() {
    expect(integerToRoman(1994)).to.equal("MCMXCIV");
  });

  it('should convert 3999 to "MMMCMXCIX"', function() {
    expect(integerToRoman(3999)).to.equal("MMMCMXCIX");
  });

  it('should throw an error for negative numbers', function() {
    expect(() => integerToRoman(-5)).to.throw();
  });

  it('should throw an error for numbers greater than 3999', function() {
    expect(() => integerToRoman(5000)).to.throw();
  });
});


describe('romanToInteger', function() {
  it('should convert "I" to 1', function() {
    expect(romanToInteger("I")).to.equal(1);
  });

  it('should convert "IV" to 4', function() {
    expect(romanToInteger("IV")).to.equal(4);
  });

  it('should convert "V" to 5', function() {
    expect(romanToInteger("V")).to.equal(5);
  });

  it('should throw an error for empty string', function() {
    expect(() => romanToInteger("")).to.throw();
  });

  it('should throw an error for invalid repetition "CCCC"', function() {
    expect(() => romanToInteger("CCCC")).to.throw();
  });

  it('should convert "X" to 10', function() {
    expect(romanToInteger("X")).to.equal(10);
  });

  it('should convert "C" to 100', function() {
    expect(romanToInteger("C")).to.equal(100);
  });

  it('should convert "MMCDXCIX" to 2499', function() {
    expect(romanToInteger("MMCDXCIX")).to.equal(2499);
  });

  it('should convert "MM" to 2000', function() {
    expect(romanToInteger("MM")).to.equal(2000);
  });

  it('should throw an error for bad syntax like "XXXIVI"', function() {
    expect(() => romanToInteger("XXXIVI")).to.throw();
  });

  // ChatGPT test definitions
  it('should convert "VIII" to 8', function() {
    expect(romanToInteger("VIII")).to.equal(8);
  });

  it('should convert "MCMXCIV" to 1994', function() {
    expect(romanToInteger("MCMXCIV")).to.equal(1994);
  });

  it('should convert "MMMCMXCIX" to 3999', function() {
    expect(romanToInteger("MMMCMXCIX")).to.equal(3999);
  });

  it('should convert lowercase input "xiv" to 14', function() {
    expect(romanToInteger("xiv")).to.equal(14);
  });

  it('should throw an error for invalid symbol "AX"', function() {
    expect(() => romanToInteger("AX")).to.throw();
  });

  it('should throw an error for "IIII"', function() {
    expect(() => romanToInteger("IIII")).to.throw();
  });

  it('should throw an error for "IIV"', function() {
    expect(() => romanToInteger("IIV")).to.throw();
  });
});

