
function setup() {
  createCanvas(windowWidth,windowHeight);
  colorMode(HSB);
  
}
function draw() {

  //if (mouseIsPressed === true) {
  //  fill(214, 211, 16);
 // } else {
 //   fill(214, 17, 20);
//  }
  // noStroke();

 // heart(mouseX, mouseY, 20);
  if (mouseIsPressed) {
    brush()
  }
}

function brush() {
  // set the color!!!!
  //multicolor brush yay
  fill(frameCount % 360,100,100);
  noStroke()
  
  heart(mouseX,mouseY,20)
}

 
function heart(x, y, size) {
  beginShape();
  vertex(x, y);
  bezierVertex(x - size / 2, y - size / 2, x - size, y + size / 3, x, y + size);
  bezierVertex(x + size, y + size / 3, x + size / 2, y - size / 2, x, y);
  endShape(CLOSE);
}