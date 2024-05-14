let isDrawing = false;
    let bgMusic = document.getElementById("bgMusic");
    let playPauseButton = document.getElementById("playPauseButton");
    let showMessage = true;

    function setup() {
      createCanvas(windowWidth, windowHeight);
      background(255);
      textSize(32);
      textAlign(CENTER, CENTER);
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
      showMessage = false; // Hide the message
      setTimeout(() => {
        showMessage = true; // Show the message again after 5 seconds
      }, 5000);
    }

    function resetCanvas() {
      background(255);
    }

    function togglePlayPause() {
      if (bgMusic.paused) {
        bgMusic.play();
        playPauseButton.innerText = "Pause"; // Change button text to "Pause"
      } else {
        bgMusic.pause();
        playPauseButton.innerText = "Play"; // Change button text to "Play"
      }
    }

    function goBack() {
      window.location.href = "index.html"; // Replace "index.html" with the URL of your home page
    }