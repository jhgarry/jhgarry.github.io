let i = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  textAlign(CENTER);
  rectMode(CENTER);
  fill(255);
}

function draw() {
  background(0);
  text("Welcome to my Page!", width/2, height/2);
  push();
  fill(0);
  translate(width/2, height/2);
  rect(i, 0, 200, 25)
  i++;
  pop();
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}