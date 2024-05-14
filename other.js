    let isDrawing = false;
    let bgMusic = document.getElementById("bgMusic");
    let muteButton = document.getElementById("muteButton");
    let strokeColor;


    function setup() {
      createCanvas(windowWidth, windowHeight);
      background(255);
      strokeColor = color(0);
    }


    function draw() {
      if (isDrawing) {
        stroke(strokeColor);
        strokeWeight(13);
        line(pmouseX, pmouseY, mouseX, mouseY);
      }
    }


    function mousePressed() {
      isDrawing = true;
    }


    function mouseReleased() {
      isDrawing = false;
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
        window.location.href = "index.html"; 
      }