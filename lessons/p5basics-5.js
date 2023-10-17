function setup() {
    createCanvas(100, 100);
  }
  
  function draw() {
    background(220);
    text("move mouse",5,80);
    text("over canvas",5,90);
    square(mouseX,mouseY,30);
  }