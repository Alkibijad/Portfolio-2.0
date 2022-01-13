//view selectors
let viewEnterPage = document.querySelector(".view-enter-page");
let viewSignUp = document.querySelector(".view-signUp");
let viewLogIn = document.querySelector(".view-login");
let notification = document.querySelector(".notification-create-account");

// sing up form inputs
let inputFirstName = document.querySelector('[name="firstName"]');
let inputLastName = document.querySelector('[name="lastName"]');
let inputEmail = document.querySelector('[name="email"]');
let inputUserName = document.querySelector('[name="userName"]');
let inputPassword = document.querySelector('[name="password"]');

//landing page buttons
let btnLogIn = document.querySelector(".log-in");
let btnSignUp = document.querySelector(".sign-up");

btnLogIn.addEventListener("click", checkUsersAccount);
btnSignUp.addEventListener("click", signUp);

function checkUsersAccount() {
  if (localStorage.length === 0) {
    displayNotification();
  } else {
    displayLogInPage();
  }
}

function displayNotification() {
  notification.style.display = "flex";
  setTimeout(function () {
    notification.style.display = "none";
  }, 2000);
}

function displayLogInPage() {
  viewLogIn.style.display = "block";
  viewEnterPage.style.display = "none";
  viewSignUp.style.display = "none";

  let submitLoginBtn = document.querySelector(".login-submit");
  submitLoginBtn.addEventListener("click", checkLogInCredentials);
}
