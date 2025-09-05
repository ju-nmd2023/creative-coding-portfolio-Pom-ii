let rowCounter = 0;

function setup() {
  createCanvas(innerWidth, innerHeight);
  background(200);
}

//CREATE THE RANDOM RECTANGLE ELEMENT
function element(x, y) {
  fill(random(0, 255), 0, random(0, 255));
  rect(x - 3, y - 2, 2, 1);
  rect(x + 2, y - 2, 2, 1);
  rect(x - 4, y - 1, 4, 2);
  rect(x + 1, y - 1, 4, 2);
  rect(x - 3, y + 1, 7, 1);
  rect(x - 2, y + 2, 5, 1);
  rect(x - 1, y + 3, 3, 1);
  rect(x, y + 4, 1);
}

//CREATE ROWS BASED ON SYMMETRY
function row(number, amount) {
  for (let i = 1; i <= amount; i++) {
    let a = round(random(number * -5, number * 5));
    element(a, rowCounter * 5);
  }
  rowCounter += 1;
}

function draw() {
  translate(innerWidth / 2, 200);
  noStroke();
  //let numberRows = round(random(100, 250));
  let numberRows = 80;

  // CREATE THE TOP ROWS
  for (let j = 10; j <= numberRows / 2; j += 2) {
    let nrElements = random(j / 4, j * (2 / 3));
    row(j, nrElements);
    nrElements = nrElements + nrElements / 4;
  }

  //CREATE THE MIDDLE ROWS
  for (let k = 0; k <= 25; k++) {
    let nrElements = random(numberRows / 2 / 3, (numberRows / 2) * (2 / 3));
    row(numberRows / 2, nrElements);
  }
  //CREATE THE BOTTOM ROWS
  for (let l = numberRows / 2; l >= 10; l -= 2) {
    let nrElements = random(l / 4, l * (2 / 3));
    row(l, nrElements);
    nrElements = nrElements - nrElements / 4;
  }

  noLoop();
}
