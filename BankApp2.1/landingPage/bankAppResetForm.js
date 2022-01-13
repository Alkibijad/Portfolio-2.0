function resetForm() {
  let signUpInputs = document.querySelectorAll("input");
  for (let i = 0; i < signUpInputs.length; i++) {
    signUpInputs[i].value = "";
  }
}
