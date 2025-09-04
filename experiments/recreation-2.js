let rowCounter = 0;

function setup() {
  createCanvas(innerWidth, innerHeight);
  background(200);
}

function row(number) {
  let width = round(random(1, 2));
  let height = round(random(1, 4));
  let x = random(number * -5, number * 5);

  for (let i = 1; i <= number * 2; i++) {
    rect(x, rowCounter * 5, width * 5, height * 5);
  }

  rowCounter += 1;
}

function draw() {
  translate(innerWidth / 2, 200);
  noStroke();
  fill(0);
  let numberRows = round(random(100, 300));
  if (numberRows % 2 != 0) {
    numberRows -= 1;
  }
  for (let j = 2; j <= numberRows / 2; j += 2) {
    row(j);
    //fill(random(0, 255), random(0, 255), random(0, 255));
  }
  for (let k = numberRows / 2; k >= 2; k -= 2) {
    row(k);
    //fill(random(0, 255), random(0, 255), random(0, 255));
  }
  noLoop();
}
