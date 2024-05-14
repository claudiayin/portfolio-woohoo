    let isDrawing = false;
    let bgMusic = document.getElementById("bgMusic");
    let muteButton = document.getElementById("muteButton");
    let strokeColor; // Variable to store stroke color

    function setup() {
      createCanvas(windowWidth, windowHeight);
      background(255);
      strokeColor = color(0); // Initialize stroke color to black
    }

    function draw() {
      if (isDrawing) {
        stroke(strokeColor);
        strokeWeight(10); // Set the stroke thickness to 10 pixels
        line(pmouseX, pmouseY, mouseX, mouseY);
      }
    }

    function mousePressed() {
      isDrawing = true;
    }

    function mouseReleased() {
      isDrawing = false;
      // Generate random RGB values for the stroke color
      strokeColor = color(random(255), random(255), random(255));
    }

    function resetCanvas() {
      background(255);
    }

    function toggleMute() {
      if (bgMusic.paused) {
        bgMusic.play();
        muteButton.innerText = "Mute";
      } else {
        bgMusic.pause();
        muteButton.innerText = "Unmute";
      }
    }

    function goBack() {
      window.location.href = "index.html"; // Replace "index.html" with the URL of your home page
    }