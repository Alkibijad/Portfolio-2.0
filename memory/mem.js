let memoryGame = {
  mainContainer: document.querySelector(".container"),
  flipedDivs: [],
  init: function () {
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
    memoryGame.mainContainer.innerHTML = text;
    memoryGame.paintDivs();
  },
  paintDivs: function () {
    let frontDivs = document.querySelectorAll(".front");
    for (let i = 0; i < frontDivs.length; i++) {
      let randomNum = Math.floor(Math.random() * colors.length);
      frontDivs[i].style.background = `#` + colors[randomNum];
    }
    memoryGame.addClick();
  },
  addClick: function () {
    let boxes = document.querySelectorAll(".box");
    for (let i = 0; i < boxes.length; i++) {
      boxes[i].addEventListener("click", memoryGame.flip);
    }
  },
  flip: function () {
    this.removeEventListener("click", memoryGame.flip);
    this.classList.add("rotate");
    memoryGame.flipedDivs.push(this);

    if (memoryGame.flipedDivs.length === 2) {
      memoryGame.check();
    }
  },
  check: function () {
    let box1 = memoryGame.flipedDivs[0].querySelector(".back");
    let box2 = memoryGame.flipedDivs[1].querySelector(".back");

    if (box1.innerHTML === box2.innerHTML) {
      memoryGame.addClick();
      memoryGame.flipedDivs = [];
    } else {
      setTimeout(function () {
        memoryGame.flipedDivs[0].classList.remove("rotate");
        memoryGame.flipedDivs[1].classList.remove("rotate");
        memoryGame.flipedDivs = [];
        memoryGame.addClick();
      }, 700);
    }
  },
};
memoryGame.init();
