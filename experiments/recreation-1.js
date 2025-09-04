let cW = innerWidth;
let cH = innerHeight;
function setup() {
  createCanvas(innerWidth, innerHeight);
  background(100);
  angleMode(DEGREES);
}

function draw() {
  noFill();
  stroke(179, 153, 255);
  strokeWeight(1);
  translate(cW / 5, cH / 2);
  for (let i = 0; i < 100; i++) {
    let value = noise(i);
    if (value < 0.5) {
      value = value * -1;
    }
    ellipse(i * 5 * value, value, 90, 30);
  }
}
