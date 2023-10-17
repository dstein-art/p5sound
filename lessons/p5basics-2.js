function setup() {
    createCanvas(100, 100);
  }
  
  function draw() {
    background(220);
    
    fill(255);  // set fill color to white
    // draw head
    circle(50,50,90);
    
    // draw left eye
    circle(30,35,10);
    
    // draw right eye
    circle(70,35,10);
    
    // draw nose
    fill(0);  // set fill color to black
    circle(50,50,10);
    
    // draw mouth(ish)
    rect(30,70,40,5);
  }