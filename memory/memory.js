let mainContainer = document.querySelector(".container");
let flipedDivs = [];

createGrid();
function createGrid() {
  let text = "";
  for (let i = 0; i < 36; i++) {
    let randomNum = Math.floor(Math.random() * icons.length);
    text += `<div class="box">
                <div class="back">
                ${icons[randomNum]}
                </div>
                <div class="front">
                
                </div>
        </div>`;
    icons.splice(randomNum, 1);
  }
  mainContainer.innerHTML = text;
}

paintDivs();
function paintDivs() {
  let frontDivs = document.querySelectorAll(".front");
  console.log(colors);

  for (let i = 0; i < colors.length; i++) {
    let randomNum = Math.floor(Math.random() * colors.length);
    frontDivs[i].style.background = `#` + colors[randomNum];
  }
}

let allBoxes = document.querySelectorAll(".box");

for (let i = 0; i < allBoxes.length; i++) {
  allBoxes[i].addEventListener("click", flip);
}

function flip() {
  this.removeEventListener("click", flip);
  this.classList.add("rotate");
  flipedDivs.push(this);

  if (flipedDivs.length === 2) {
    check();
  }
}

function check() {
  console.log("and this");
  let box1 = flipedDivs[0].querySelector(".back");
  let box2 = flipedDivs[1].querySelector(".back");

  if (box1.innerHTML === box2.innerHTML) {
    addClicks();
    flipedDivs = [];
  } else {
    setTimeout(function () {
      flipedDivs[0].classList.remove("rotate");
      flipedDivs[1].classList.remove("rotate");
      flipedDivs = [];
      addClicks();
    }, 700);
  }
}

function addClicks() {
  let boxes = document.getElementsByClassName("box");
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("click", flip);
  }
}
