let btnStart = document.querySelector(".btnStart");
let btns = document.querySelectorAll(".btn");
btnStart.addEventListener("click", createCircle);

function createCircle() {
  btnStart.style.display = "none";
  for (let i = 0; i < btns.length; i++) {
    btns[i].style.display = "none";
  }
  let counter = 0;

  let loop = setInterval(function (circle) {
    circle = document.createElement("div");
    circle.className = "circle";
    document.body.appendChild(circle);
    counter++;

    if (counter === 5) {
      clearInterval(loop);
    }

    setCircleColors(circle);
    setCircleSize(circle);
    setCirclePosition(circle);
  }, 1000);
}

function setCircleColors(circle) {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);
  let rgb = "rgba(" + red + "," + green + "," + blue + ",0.7)";
  circle.style.background = rgb;
}

function setCircleSize(circle) {
  let size = Math.floor(Math.random() * 300);
  circle.style.width = size + "px";
  circle.style.height = size + "px";
}

function setCirclePosition(circle) {
  let y = Math.floor(Math.random() * 799);
  let x = Math.floor(Math.random() * 1000);
  circle.style.top = y + "px";
  circle.style.left = x + "px";
  getCirclePosition(circle);
}

function getCirclePosition(circle) {
  let computed = window.getComputedStyle(circle);
  let getRandomPositionXY = {
    x: parseInt(computed.getPropertyValue("top")),
    y: parseInt(computed.getPropertyValue("left")),
  };
  setBouncingDown(circle, getRandomPositionXY);
}

function setBouncingDown(circle, circlePosition) {
  let currentX = circlePosition.x;
  let addPX = 1;

  let loop = setInterval(function () {
    circle.style.top = currentX + "px";
    currentX += addPX;

    if (currentX === 800) {
      clearInterval(loop);
      setBounceUp(circle, currentX);
    }
  }, 10);
}

function setBounceUp(circle, currentX) {
  console.log(currentX);
  let reducePX = 1;

  let loop = setInterval(function () {
    circle.style.top = currentX + "px";
    currentX = currentX - reducePX;

    if (currentX === 0) {
      clearInterval(loop);
      getCirclePosition(circle);
    }
  }, 10);
}
