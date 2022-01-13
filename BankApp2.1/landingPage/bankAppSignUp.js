function signUp() {
  viewEnterPage.style.display = "none";
  viewSignUp.style.display = "block";
  viewLogIn.style.display = "none";

  let btnSubmit = document.querySelector(".btnSubmit");
  btnSubmit.addEventListener("click", formVerification);
}
