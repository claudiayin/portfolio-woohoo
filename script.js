const trails = document.querySelectorAll(".trail");
const smoothPointer = {
  x: window.innerWidth / 2,
  y: window.innerHeight / 2,
};
const totalPointsArray = [40, 35, 30, 25, 20, 15, 10];

window.addEventListener("mousemove", (event) => {
  gsap.to(smoothPointer, {
    x: event.clientX,
    y: event.clientY,
    duration: 0.5,
    ease: "power2.out",
  });
});

function updatePath() {
  trails.forEach((path, index) => {
    let points = path.points || [];
    points.unshift({ ...smoothPointer });
    while (points.length > totalPointsArray[index]) {
      points.pop();
    }
    path.points = points;

    if (points.length > 1) {
      let d = `M ${points[0].x} ${points[0].y}`;
      for (let i = 1; i < points.length; i++) {
        d += ` L ${points[i].x} ${points[i].y}`;
      }
      path.setAttribute("d", d);
    }
  });

  requestAnimationFrame(updatePath);
}

updatePath();

gsap.from(".clip-top, .clip-bottom", 2, {
    delay: 1,
    height: "50vh",
    ease: "power4.inOut",
  });

  gsap.to(".marquee", 3.5, {
    delay: 0.75,
    top: "50%",
    ease: "power4.inOut",
  });

  gsap.from(".clip-top .marquee, .clip-bottom .marquee", 5, {
    delay: 1,
    left: "100%",
    ease: "power3.inOut",
  });

  gsap.from(".clip-center .marquee", 5, {
    delay: 1,
    left: "-50%", 
    ease: "power3.inOut",
  });

  gsap.to(".clip-top", 2, {
    delay: 6,
    clipPath: "inset(0 0 100% 0)",
    ease: "power4.inOut",
  });

  gsap.to(".clip-bottom", 2, {
    delay: 6,
    clipPath: "inset(100% 0 0 0)",
    ease: "power4.inOut",
  });

  gsap.to(
    ".clip-top .marquee, .clip-bottom .marquee, .clip-center .marquee span",
    1,
    {
      delay: 6,
      opacity: 0,
      ease: "power2.inOut",
    }
  );