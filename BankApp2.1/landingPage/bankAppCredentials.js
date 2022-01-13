function checkLogInCredentials() {
  let loginUsernameInput = document.querySelector("#login-username");
  let loginPasswordInput = document.querySelector("#login-password");

  let usernameLS = JSON.parse(localStorage.getItem("newUser")).userName;
  let passwordLS = JSON.parse(localStorage.getItem("newUser")).password;

  if (
    loginUsernameInput.value === usernameLS &&
    loginPasswordInput.value === passwordLS
  ) {
    viewLogIn.style.display = "none";
    viewEnterPage.style.display = "none";
    viewSignUp.style.display = "none";
    notification.style.display = "none";
    window.location.href =
      "/Portfolio-2.0/BankApp2.1/accountingPage/bankAppAccountingPage.html";
  } else {
    notification.style.display = "flex";
    loginUsernameInput.style.border = "1px solid red";
    loginPasswordInput.style.border = "1px solid red";
    notification.innerHTML = "password or username do not match";
  }
}
