let start = 1;
let reset = start;
let angle = 0.13;
let inc = 300;
let len;
let sw;

function setup() {
  createCanvas(innerWidth, innerHeight);
  background(0);
  colorMode(HSB, 1, 1, 1, 1);

  let minDimension = min(width, height);

  sw = map(minDimension, 300, 1000, 2, 7);
  strokeWeight(sw);

  len = map(minDimension, 300, 1000, 3, 8);
}

function draw() {
  let sequence = [];
  let n = start;
  do {
    sequence.push(n);
    n = collatz(n);
  } while (n != 1);
  sequence.push(1);
  sequence.reverse();

  resetMatrix();
  translate(width / 2, height);
  for (let j = 0; j < sequence.length; j++) {
    let value = sequence[j];
    if (value % 2 == 0) {
      rotate(angle);
    } else {
      rotate(-angle);
    }
    stroke(j / sequence.length, 1, 1, 0.03);
    line(0, 0, 0, -len);
    translate(0, -len);
  }
  start += inc;

  if (start > 50000) {
    reset++;
    start = reset;
  }
}

function collatz(n) {
  if (n % 2 == 0) {
    return n / 2;
  } else {
    return (3 * n + 1) / 2;
  }
}
