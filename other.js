let isDrawing = false;
let bgMusic = document.getElementById("bgMusic");
let playPauseButton = document.getElementById("playPauseButton");
let showMessage = true;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  textSize(32);
  textAlign(CENTER, CENTER);
  showMessage = true;
  setTimeout(() => {
    showMessage = false; // Hide the message after 5 seconds
  }, 5000);
}

function draw() {
  if (isDrawing) {
    stroke(0);
    strokeWeight(10);
    line(pmouseX, pmouseY, mouseX, mouseY);
  }
  if (showMessage) {
    fill(0);
    text("Colors will change with each cursor release", width/2, height/2);
  }
}

function mousePressed() {
  isDrawing = true;
}

function mouseReleased() {
  isDrawing = false;
  showMessage = false; 
}

function resetCanvas() {
  background(255);
  // Show the message again when the canvas is reset
  showMessage = true;
  setTimeout(() => {
    showMessage = false; // Hide the message after 5 seconds
  }, 5000);
}

function togglePlayPause() {
  if (bgMusic.paused) {
    bgMusic.play();
    playPauseButton.innerText = "Pause";
  } else {
    bgMusic.pause();
    playPauseButton.innerText = "Play"; 
  }
}

function goBack() {
  window.location.href = "index.html"; 
}