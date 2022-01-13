function formVerification() {
  let errorsCounter = 0;

  if (inputFirstName.value.length < 3) {
    errorsCounter++;
    inputFirstName.classList.add("input-notification");
    inputFirstName.style.border = "1px solid red";
    inputFirstName.value = "Please enter a valid name";
  }
  if (inputLastName.value.length < 3) {
    errorsCounter++;
    inputLastName.classList.add("input-notification");
    inputLastName.style.border = "1px solid red";
    inputLastName.value = "Please enter a valid last name";
  }
  if (inputEmail.value.length < 3) {
    errorsCounter++;
    inputEmail.classList.add("input-notification");
    inputEmail.style.border = "1px solid red";
    inputEmail.value = "Please enter a valid email";
  }
  if (inputUserName.value.length < 3) {
    errorsCounter++;
    inputUserName.classList.add("input-notification");
    inputUserName.style.border = "1px solid red";
    inputUserName.value = "Please enter a valid username";
  }
  if (inputPassword.value.length < 3) {
    errorsCounter++;
    inputPassword.classList.add("input-notification");
    inputPassword.style.border = "1px solid red";
    inputPassword.value = "Please enter a valid password";
  }

  if (errorsCounter === 0) {
    console.log("radi");
    submitForm();
  }
}
