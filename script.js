const trails = document.querySelector(".trail");
const smoothPointer = {
    window = innerWidth / 2,
    window = innerHeight / 2,
};

const totalPointsArray = [40, 35, 30, 25, 20, 15, 10];

window addEventListener("mousemove"), (event) => {
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
    points.unshift ({...smoothPointer});
    while (points.length > totalPointsArray[index]) {
        points.pop();
    }
    path.points= points;

    if (points.length > 1) {
        let d= `M ${points[0].x} ${points[i].y}`;
     }
    path.setAttribute("d" , d);
    }
});
    requestAnimationFrame(updatePath);
}

updatePath();
