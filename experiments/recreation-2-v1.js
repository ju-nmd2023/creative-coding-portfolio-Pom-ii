let rowCounter = 0;

function setup() {
  createCanvas(innerWidth, innerHeight);
  background(200);
}

//CREATE THE RANDOM RECTANGLE ELEMENT
function element(x, y) {
  let b = round(random(1, 4));
  let randomNum = round(random(0, 1));
  fill(random(0, 255), 0, random(0, 255));

  if (randomNum === 0) {
    rect(x, y, 5, b * 5);
  } else {
    rect(x, y, b * 5, 5);
  }
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
  fill(0);
  noStroke();
  //let numberRows = round(random(100, 250));
  let numberRows = 80;

  //MAKE THE NUMBER EVEN IF IT ISN'T
  if (numberRows % 2 != 0) {
    numberRows -= 1;
  }

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
