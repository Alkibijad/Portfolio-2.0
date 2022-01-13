let profilePic = document.querySelectorAll(".profile-pic");
let uploadBtns = document.querySelectorAll("#uploadBtn");
let enterNamesBtn = document.querySelector(".enter-names");
let namesForm = document.querySelector(".enterNames-container");

for (let i = 0; i < profilePic.length; i++) {
  profilePic[i].addEventListener("mouseenter", displayUploadBtn);
  profilePic[i].addEventListener("mouseleave", hideUploadBtn);
}
function displayUploadBtn() {
  let id = this.getAttribute("data-id");
  let currentDiv = document.querySelector("label[data-id=" + id + "]");
  currentDiv.style.display = "block";
  if (id == "displayBtn1") {
    uploadPlayer1();
  } else {
    uploadPlayer2();
  }
}
function hideUploadBtn() {
  for (let i = 0; i < uploadBtns.length; i++) {
    uploadBtns[i].style.display = "none";
  }
}
function uploadPlayer1() {
  let playerOneFile = document.querySelector(".file1");
  let playerOnePhoto = document.querySelector(".playerOnePhoto");
  playerOneFile.addEventListener("change", function () {
    let chosenFile = this.files[0];
    if (chosenFile) {
      let reader = new FileReader();
      reader.addEventListener("load", function () {
        playerOnePhoto.setAttribute("src", reader.result);
      });
      reader.readAsDataURL(chosenFile);
    }
  });
}
function uploadPlayer2() {
  let playerTwoFile = document.querySelector(".file2");
  let playerTwoPhoto = document.querySelector(".playerTwoPhoto");

  playerTwoFile.addEventListener("change", function () {
    let chosenFile = this.files[0];

    if (chosenFile) {
      let reader = new FileReader();
      reader.addEventListener("load", function () {
        playerTwoPhoto.setAttribute("src", reader.result);
      });
      reader.readAsDataURL(chosenFile);
    }
  });
}
function incrament() {
  let theFontSize = 30;
  let fontSize = 30;
  let loop = setInterval(function () {
    enterNamesBtn.style.fontSize = fontSize + "px";
    fontSize++;

    if (fontSize === 40) {
      clearInterval(loop);
      decrament();
    }
  }, 100);
}
incrament();
function decrament() {
  let fontSize = 40;
  let loop = setInterval(function () {
    enterNamesBtn.style.fontSize = fontSize + "px";
    fontSize--;
    if (fontSize === 30) {
      clearInterval(loop);
      incrament();
    }
  }, 100);
}
enterNamesBtn.addEventListener("click", function () {
  enterNamesBtn.style.display = "none";

  let text = `
     <div class="enter-playersName-container text-center">
       <div class="names-input">
            <label for="name">Enter Player 1 Name </label>
            <input type="text" id="playerOneInput" class="form-control">
        </div>
          <div class="names-input">
              <label for="name">Enter Player 2 Name </label>
              <input type="text" id="playerTwoInput" class="form-control">
          </div>
          <div class="entered-namesBtn">
          <button>Next</button>
          </div>
      </div>`;

  namesForm.innerHTML = text;
  let enterPlayersNameContainer = document.querySelector(
    ".enter-playersName-container "
  );
  enterPlayersNameContainer.style.display = "block";
  let enteredNamesBtn = document.querySelector(".entered-namesBtn");
  enteredNamesBtn.addEventListener("click", addNames);
});

function addNames() {
  let playerOneName = document.querySelector(".playerOneName");
  let playerTwoName = document.querySelector(".playerTwoName");
  let playerOneNameInput = document.querySelector("#playerOneInput");
  let playerTwoNameInput = document.querySelector("#playerTwoInput");

  playerOneName.innerHTML = playerOneNameInput.value;
  playerTwoName.innerHTML = playerTwoNameInput.value;
  let enterPlayersNameContainer = document.querySelector(
    ".enter-playersName-container"
  );
  enterPlayersNameContainer.style.display = "none";
  startCounter();
}
function startCounter() {
  let counter = 5;
  let loop = setInterval(function () {
    let text = ` <div class="countdown text-center">
                        <p class="gameStarter">the game start's in</p>
                        <div class="counter-div">${counter}</div>
                     </div>`;
    namesForm.innerHTML = text;

    counter--;

    if (counter === -1) {
      clearInterval(loop);
      let gameStarter = document.querySelector(".gameStarter");
      gameStarter.style.display = "block";
      let counterDiv = document.querySelector(".counter-div");
      counterDiv.classList.add("go");
      counterDiv.innerHTML = "GO";

      setTimeout(function () {
        let countdown = document.querySelector(".countdown");
        countdown.style.display = "none";
        startTheGame();
      }, 500);
    }
  }, 1000);
}

function startTheGame() {
  let text = `<div class="game-container text-center">

                  <div class="game">

                    <h1 class="round">Player 1 click dice to start</h1>
                    
                    <div class="each-player-container">

                        <div class="playerOne player">
                          <img src="./images/dice-blue.png" class="dice dice-blue">
                          <p class="pOne-hand-score score">Hand Score: 0</>
                           <p class="pOne-total-score score">Total Score: 0</>
                        </div>

                        <div class="playerTwo player">
                          <img src="./images/dice-grey.png" class="dice dice-gray">
                           <p class="pTwo-round-score score">Hand Score: 0</>
                           <p class="pTwo-total-score score">Total Score: 0</>
                        </div>
                        
                    </div> 

                    <div>
                            <h1 class="winner"> </h1>
                        </div>
                    
                    
                  </div>
                 
               </div> 
               `;
  namesForm.innerHTML = text;

  let diceBlue = document.querySelector(".dice-blue");
  diceBlue.addEventListener("click", playerOneGame);
  let diceGray = document.querySelector(".dice-gray");
  diceGray.addEventListener("click", playerTwoGame);
}
let roundCount = 1;
let scorePlayerOne = 0;
function playerOneGame() {
  this.removeEventListener("click", playerOneGame);
  let diceGray = document.querySelector(".dice-gray");
  diceGray.addEventListener("click", playerTwoGame);
  let cubePlayerOne = Math.floor(Math.random() * 6) + 1;
  scorePlayerOne += cubePlayerOne;

  bounce();

  let playerOneName = document.querySelector(".playerOneName");
  let theWinner = document.querySelector(".winner");

  let name = playerOneName.innerHTML;

  if (scorePlayerOne >= 21) {
    setTimeout(function () {
      theWinner.innerHTML = "The winner is " + name;
    }, 100);
  }

  let handScore = document.querySelector(".pOne-hand-score");
  handScore.innerHTML = "Hand score:" + cubePlayerOne;
  let totalScore = document.querySelector(".pOne-total-score");
  totalScore.innerHTML = "Hand score:" + scorePlayerOne;

  let roundCounter = document.querySelector(".round");
  roundCounter.innerHTML = "Round " + roundCount;
  roundCount++;
}

function bounce() {
  let upCounter = 0;
  let loop = setInterval(function () {
    let playerTwoDice = document.querySelector(".playerTwo img");
    playerTwoDice.classList.add("up");
    upCounter++;

    if (upCounter > 2) {
      playerTwoDice.classList.remove("up");
      clearInterval(loop);
    }
  }, 500);
}
let scorePlayerTwo = 0;
function playerTwoGame() {
  this.removeEventListener("click", playerTwoGame);
  let diceBlue = document.querySelector(".dice-blue");
  diceBlue.addEventListener("click", playerOneGame);

  let cubePlayerTwo = Math.floor(Math.random() * 6) + 1;
  scorePlayerTwo += cubePlayerTwo;

  let playerTwoName = document.querySelector(".playerTwoName");
  let theWinner = document.querySelector(".winner");
  let name = playerTwoName.innerHTML;

  if (scorePlayerTwo >= 21) {
    setTimeout(function () {
      theWinner.innerHTML = "The winner is " + name;
    }, 100);
  }

  let handScore = document.querySelector(".pTwo-round-score ");
  handScore.innerHTML = "Hand score:" + cubePlayerTwo;
  let totalScore = document.querySelector(".pTwo-total-score ");
  totalScore.innerHTML = "Total score:" + scorePlayerTwo;
}
