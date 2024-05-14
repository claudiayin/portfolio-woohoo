let circle; // Object representing the red circle
let isDragging = false; // State to check if the circle is being dragged
let returnTime = 1.2; // Time in seconds before the circle returns to the center
let timer = null; // Timer to track the countdown
let textOnCircle = "plz dont drag me >.<"; // Text to be displayed on the circle

function setup() {
  createCanvas(windowWidth, windowHeight); // Full-screen canvas
  let radius = 200; // Set circle radius
  let centerX = width / 2; // Horizontal center
  let centerY = height / 2; // Vertical center

  // Create the circle with initial position and size
  circle = {
    x: centerX,
    y: centerY,
    radius: radius,
    color: 'red'
  };
}

function draw() {
  background(255); // White background

  // Draw hidden text
  fill(0); // Black text
  textSize(32);
  textAlign(CENTER, CENTER);
  text("20230052@MYWHITECLIFFE.COM", width / 2, height / 2);

  // Draw the red circle
  fill(circle.color);
  noStroke();
  ellipse(circle.x, circle.y, circle.radius * 3, circle.radius * 3); // Draw the circle
  
  // Draw the fixed text on top of the circle
  fill(255); // White text to contrast with the red circle
  textSize(24);
  textAlign(CENTER, CENTER);
  text(textOnCircle, circle.x, circle.y); // Draw the text on the circle
  
  // Display the countdown timer if it's active
  if (timer) {
    fill(0); // Black text
    textSize(24);
    textAlign(CENTER, TOP);
    text(
      "AHHHHHHHHH in: " + (returnTime - (millis() - timer) / 1000).toFixed(1),
      width / 2,
      height - 50
    );
  }

  // Check if the timer has expired and reset the circle to the center
  if (timer && millis() - timer >= returnTime * 1000) {
    resetCircle(); // Reset circle to the center
  }
}

function mousePressed() {
  // Check if mouse is within the circle's boundary
  let d = dist(mouseX, mouseY, circle.x, circle.y);
  if (d < circle.radius) {
    isDragging = true; // Start dragging if clicked within the circle
    timer = millis(); // Start the timer
  }
}

function mouseReleased() {
  isDragging = false; // Stop dragging when the mouse is released
}

function mouseDragged() {
  if (isDragging) {
    // Update circle position to follow the mouse
    circle.x = mouseX;
    circle.y = mouseY;
  }
}

function resetCircle() {
  // Reset the circle's position to the center
  circle.x = width / 2;
  circle.y = height / 2;
  timer = null; // Reset the timer
}