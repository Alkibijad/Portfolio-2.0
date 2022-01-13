let gameContainer = document.querySelector(".game-container");
let gifBackGround = `<div style="padding-top:93.878%;position:relative; border=1px solid red">
        <iframe src="https://gifer.com/embed/Acb" width="100%" height="100%" style="position:absolute;top:0;left:0;" frameBorder="0" allowFullScreen>
        </iframe>
  </div>`;

function createTable() {
  let text = "";
  for (let i = 0; i < 9; i++) {
    text += ` <div class="box"></div>`;
  }
  gameContainer.innerHTML = text;
}
createTable();

let boxes = document.querySelectorAll(".box");

for (let i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener("click", addSymbol);
}

let symbol = "X";
function addSymbol() {
  if (symbol === "X") {
    symbol = "O";
  } else {
    symbol = "X";
  }
  this.innerHTML = symbol;
  this.removeEventListener("click", addSymbol);
  checkLines();
}

function checkLines() {
  let lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 2],
    [2, 5, 8],
    [0, 4, 8],
    [5, 4, 6],
  ];
  lines.forEach(function (line) {
    let box1 = boxes[line[0]];
    let box2 = boxes[line[1]];
    let box3 = boxes[line[2]];

    if (
      box1.innerHTML === box2.innerHTML &&
      box1.innerHTML === box3.innerHTML &&
      box1.innerHTML !== ""
    ) {
      setTimeout(function () {
        box1.style.background = "blue";
        box2.style.background = "blue";
        box3.style.background = "blue";
        setTimeout(function () {
          for (let i = 0; i < boxes.length; i++) {
            boxes[i].style.display = "none";
            gameContainer.style.display = "block";
            gameContainer.innerHTML = gifBackGround;
          }
        }, 1000);
      }, 1000);
      removeClick();
    }
  });
}

function removeClick() {
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].removeEventListener("click", addSymbol);
  }
}
