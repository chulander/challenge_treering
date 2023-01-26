const algo = require("./problem2");

const testValue1 = "111";
const expectedCount1 = 3;
const expectedResult1 = ["aaa", "ak", "ka"];

describe(`Test Value: ${testValue1}`, () => {
  test(`"${testValue1}" results to equal ${expectedCount1}`, () => {
    const result = algo(testValue1);
    expect(result.length === expectedCount1);
  });
  test(`"${testValue1}" include ${expectedResult1}`, () => {
    const result = algo(testValue1);

    const allMatches = result.reduce(
      (curr, next) => expectedResult1.includes(next),
      true
    );
    expect(result.length === expectedCount1 && allMatches);
  });
});

const testValue2 = "1111";
const expectedCount2 = 5;
const expectedResult2 = ["aaaa", "aak", "kaa", "aka", "kk"];

describe(`Test Value: ${testValue2}`, () => {
  test(`"${testValue2}" results to equal ${expectedCount2}`, () => {
    const result = algo(testValue2);
    expect(result.length === expectedCount2);
  });
  test(`"${testValue2}" include ${expectedResult2}`, () => {
    const result = algo(testValue2);

    const allMatches = result.reduce(
      (curr, next) => expectedResult2.includes(next),
      true
    );
    expect(result.length === expectedCount2 && allMatches);
  });
});
