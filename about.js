let circle; 
let isDragging = false; 
let returnTime = 1.2; 
let timer = null; 
let textOnCircle = "plz dont drag me >.<"; 

function setup() {
  createCanvas(windowWidth, windowHeight); 
  let radius = 200; 
  let centerX = width / 2; // these two will put circle centered
  let centerY = height / 2; 

function windowResized() {
    resizeCanvas(windowWidth, windowHeight); //to make it responsive!!
  }
  circle = {
    x: centerX,
    y: centerY,
    radius: radius,
    color: 'red'
  };
}

function draw() {
  background(255); 

  fill(0); // Black text
  textSize(32);
  textAlign(CENTER, CENTER);
  text("20230052@MYWHITECLIFFE.COM", width / 2, height / 2);

  // Draw the red circle
  fill(circle.color);
  noStroke();
  ellipse(circle.x, circle.y, circle.radius * 3, circle.radius * 3); 
  
  fill(255); //this is for the white text
  textSize(24);
  textAlign(CENTER, CENTER);
  text(textOnCircle, circle.x, circle.y);
  
  if (timer) {
    fill(0);
    textSize(24);
    textAlign(CENTER, TOP);
    text(
      "AHHHHHHHHH in: " + (returnTime - (millis() - timer) / 1000).toFixed(1),
      width / 2,
      height - 200
    );
  }

  if (timer && millis() - timer >= returnTime * 1000) {
    resetCircle(); 
  }
}

function mousePressed() {
  let d = dist(mouseX, mouseY, circle.x, circle.y);
  if (d < circle.radius) {
    isDragging = true; 
    timer = millis(); 
  }
}

function mouseReleased() {
  isDragging = false; 
}

function mouseDragged() {
  if (isDragging) {

    circle.x = mouseX;
    circle.y = mouseY;
  }
}

function resetCircle() {
 
  circle.x = width / 2;
  circle.y = height / 2;
  timer = null; 
}

function goBack() {
    window.location.href = "index.html"; 
  }