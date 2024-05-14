let isDrawing = false;
    let bgMusic = document.getElementById("bgMusic");
    let muteButton = document.getElementById("muteButton");


    function setup() {
      createCanvas(windowWidth, windowHeight);
      background(255);
    }


    function draw() {
      if (isDrawing) {
        stroke(0);
        strokeWeight(5);
        line(pmouseX, pmouseY, mouseX, mouseY);
      }
    }


    function mousePressed() {
      isDrawing = true;
    }


    function mouseReleased() {
      isDrawing = false;
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