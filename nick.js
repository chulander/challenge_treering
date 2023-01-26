function bomb(x, y) {
  inputArr.push({ x, y });
  console.log("bomb", x, y);
}

const inputArr = [];
function isBombed(x, y) {
  let exist = false;
  inputArr.forEach((item) => {
    if (item.x === x && item.y === y) {
      exist = true;
    }
  });
  return exist;
}

function generateMath() {
  return Math.floor(Math.random() * 3);
}

let interval = setInterval(broker, 1000);
function broker() {
  // [0, 0], [0, 1], [0, 2][(1, 0)], [1, 1], [1, 2][(2, 0)], [2, 1], [2, 2];
  let iterate = true;
  do {
    let x = generateMath();
    let y = generateMath();
    if (!isBombed(x, y)) {
      bomb(x, y);
    }
    // check if all been bomb
    if (inputArr.length >= 9) {
      clearInterval(interval);
    }

    // check if its all been bombed
  } while (iterate);
}

broker();
