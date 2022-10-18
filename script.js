const center = document.querySelector(".list-music");
const items = document.querySelectorAll(".list-music li");
const angle = 360 / items.length;
let currAngle = 0;

document.addEventListener("click", function (event) {
    if (event.target.tagName.toLowerCase() == "h1") {
        console.log("hit h1");
    }

    if ((window.innerWidth * 2) / 3 < event.clientX) {
        currAngle -= angle;
    } else if (event.clientX < window.innerWidth / 3) {
        currAngle += angle;
    }
    center.style.transform = `translate(-50%, -50%) rotateY(${currAngle}deg)`;
});

center.addEventListener("mouseover", function (event) {
    if ((window.innerWidth * 2) / 3 < event.clientX) {
    } else if (event.clientX < window.innerWidth / 3) {
    } else {
        if (event.target.tagName.toLowerCase() == "img") {
            event.target.classList.add("active");
        }
    }
});
center.addEventListener("mouseout", function (event) {
    if ((window.innerWidth * 2) / 3 < event.clientX) {
    } else if (event.clientX < window.innerWidth / 3) {
    } else {
        if (event.target.tagName.toLowerCase() == "img") {
            event.target.classList.remove("active");
        }
    }
});
