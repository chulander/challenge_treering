const coordinates = {
  "00": true,
  "01": true,
  "02": true,
  10: true,
  11: true,
  12: true,
  20: true,
  21: true,
  22: true,
};
const generateMath = (count = 1) => Math.floor(Math.random() * count);

let interval = setInterval(bomber, 1000);

function bomber() {
  const keys = Object.keys(coordinates);
  if (keys.length) {
    const num = generateMath(keys.length);
    const [x, y] = keys[num];
    console.log("bomb", x, y);
    // remove from existing
    delete coordinates[keys[num]];
  } else {
    clearInterval(interval);
  }
}

bomber();
