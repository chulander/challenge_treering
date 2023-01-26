const dict = {
  1: "a",
  2: "b",
  3: "c",
  4: "d",
  5: "e",
  6: "f",
  7: "g",
  8: "h",
  9: "i",
  10: "j",
  11: "k",
  12: "l",
  13: "m",
  14: "n",
  15: "o",
  16: "p",
  17: "q",
  18: "r",
  19: "s",
  20: "t",
  21: "u",
  22: "v",
  23: "w",
  24: "x",
  25: "y",
  26: "z",
};

const getValues = (arr) => arr.map((item) => dict[item]).join("");

// recursive function
// operates on the 1st char of the seen Array
// operates on the 1st two chars of the seen Array if value is >=10 && <=26
function recursive(inputArr = [], seenArr = [], resultsArr = []) {
  if (!inputArr.length) {
    // assumes all values in the seenArr are
    // >=1 && <=26
    resultsArr.push(getValues(seenArr));
    return;
  }
  // Step 1: Single Character Operations
  const firstChar = inputArr[0];
  if (Number(firstChar) >= 1) {
    // beware of 0
    // recurse with a new instance of the seen array minus first char
    // move the first char to the end of the seen array
    recursive(inputArr.slice(1), seenArr.concat(firstChar), resultsArr);
  }
  // Step 2: Two Character Opeartions

  // move each two character from input to seen array
  // only if thw two character between 10 and 26
  // beware of 01, 02, etc
  const twoChar = inputArr.slice(0, 2).join("");
  if (inputArr.length >= 2 && Number(twoChar) >= 10 && Number(twoChar) <= 26) {
    //recurse with a new instance of the seenArray minus the first two chars
    // move the first two chars to the end of the seen array
    recursive(inputArr.slice(2), seenArr.concat(twoChar), resultsArr);
  }
  return resultsArr;
}

function algo(str) {
  const results = [];
  return recursive(str.split(""), [], results);
}
module.exports = algo;
// let val = "12145";
// console.log(recursive(val.split(""), [], []));
