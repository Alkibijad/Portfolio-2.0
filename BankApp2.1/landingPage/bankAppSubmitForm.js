function submitForm() {
  let newUser = {
    firstName: inputFirstName.value,
    lastName: inputLastName.value,
    emailName: inputEmail.value,
    userName: inputUserName.value,
    password: inputPassword.value,
  };

  localStorage.setItem("newUser", JSON.stringify(newUser));
  resetForm();
  displayLogInPage();
}
