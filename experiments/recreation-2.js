let rowCounter = 0;

function setup() {
  createCanvas(innerWidth, innerHeight);
  background(200);
}

function element(x, y) {
  let b = round(random(1, 3));
  if (random(0, 10) <= 5) {
    rect(x, y, 5, b * 5);
  } else {
    rect(x, y, b * 5, 5);
  }
}

function row(number) {
  //let width = round(random(1, 2));
  //let height = round(random(1, 4));
  let a = round(random(number * -5, number * 5));

  for (let i = 1; i <= number * 2; i++) {
    element(a, rowCounter * 5);
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
    //fill(random(0, 255), random(0, 255), random(0, 255));
    row(j);
  }
  for (let k = numberRows / 2; k >= 2; k -= 2) {
    //fill(random(0, 255), random(0, 255), random(0, 255));
    row(k);
  }
  noLoop();
}
