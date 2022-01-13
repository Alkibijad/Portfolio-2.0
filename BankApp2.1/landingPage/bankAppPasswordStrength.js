let countEvents = [];
let counter = 0;
let passwordStrenght = document.querySelector(".password-charger");

passwordStrength();
function passwordStrength() {
  inputPassword.addEventListener("keydown", inspectEO);
}
function inspectEO(e) {
  if (e.code !== "Backspace") {
    countEvents.push(e.code);
    increaseStrenght();
  } else {
    decreaseStrenght();
  }
}
function increaseStrenght() {
  counter += 10;
  console.log(counter);
  if (counter <= 100) {
    for (let i = 0; i < countEvents.length; i++) {
      passwordStrenght.style.width = counter + "%";
    }
  } else if (counter > 100) {
    inputPassword.classList.add("input-notification");
    inputPassword.style.border = "1px solid red";
    inputPassword.value = "Please enter a password no longer then 10 digits";
  }
}

function decreaseStrenght() {
  inputPassword.value = "";
  countEvents = [];
  counter = 0;
  passwordStrenght.style.width = counter + "%";
}
