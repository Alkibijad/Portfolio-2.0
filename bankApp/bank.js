let buttons = document.querySelectorAll(".btnNav");
let views = document.querySelectorAll(".view");
console.log(views);

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", changeView);
}

function changeView() {
  for (let i = 0; i < views.length; i++) {
    views[i].style.display = "none";
  }

  let btnData = this.getAttribute("data");
  let currentView = document.querySelector("section[data=" + btnData + "]");
  currentView.style.display = "block";

  if (btnData === "display-accounts") {
    displayAcounts();
  } else if (btnData === "display-edit-account") {
    displayEditAccount();
  }
}

let accountsBody = document.querySelector(".accounts-body");
let btnSubmit = document.querySelector("#btnSubmit");

function displayAcounts() {
  let text = "";
  for (let i = 0; i < db.length; i++) {
    text += `<tr>
            <td>${db[i].name}</td>
            <td>${db[i].last_name}</td>
            <td>${db[i].deposit}</td>
            <td>${db[i].card}</td>
          </tr> `;
  }
  accountsBody.innerHTML = text;
}

btnSubmit.addEventListener("click", function () {
  let firstName = document.querySelector("#first-name");
  let lastName = document.querySelector("#last-name");
  let deposit = document.querySelector("#deposit");
  let card = document.querySelector("#card");

  let newAccount = {
    name: firstName.value,
    last_name: lastName.value,
    deposit: deposit.value,
    card: card.value,
  };

  db.push(newAccount);
  resetAccountValues(firstName, lastName, deposit, card);
});

function resetAccountValues(firstName, lastName, deposit, card) {
  firstName.value = "";
  lastName.value = "";
  deposit.value = "";
  card.value = "";
}

function displayEditAccount() {
  let editDeleteViewBody = document.querySelector(".edit-delete-accounts");

  let text = "";
  for (let i = 0; i < db.length; i++) {
    text += `<tr>
            <td>${db[i].name}</td>
            <td>${db[i].last_name}</td>
            <td>${db[i].deposit}</td>
            <td>${db[i].card}</td>
            <td><button class="btn btn-danger btnDelete" data-id="${i}">Delete</button></td>
            <td><button class="btn btn-info btnEdit" data="display-edit" data-id="${i}">Edit</button></td>
          </tr> `;
  }
  editDeleteViewBody.innerHTML = text;

  let btnsDelete = document.querySelectorAll(".btnDelete");
  let btnsEdit = document.querySelectorAll(".btnEdit");
  for (let i = 0; i < btnsDelete.length; i++) {
    btnsDelete[i].addEventListener("click", deleteAccount);
    btnsEdit[i].addEventListener("click", editAccount);
  }
}

function deleteAccount() {
  db.splice(this.getAttribute("data-id"), 1);
  displayEditAccount();
}

function editAccount() {
  let editView = document.querySelector(".edit-account");
  for (let i = 0; i < views.length; i++) {
    const element = views[i];
    element.style.display = "none";
  }
  editView.style.display = "block";

  let editName = document.querySelector("#edit-first-name");
  let editLastName = document.querySelector("#edit-last-name");
  let editDeposit = document.querySelector("#edit-deposit");
  let editCard = document.querySelector("#edit-card");

  let id = this.getAttribute("data-id");
  let getAccountToEdit = db[id];
  console.log(getAccountToEdit.name);

  editName.value = getAccountToEdit.name;
  editLastName.value = getAccountToEdit.last_name;
  editDeposit.value = getAccountToEdit.deposit;
  editCard.value = getAccountToEdit.card;

  let btnSave = document.querySelector("#btnSave");
  btnSave.addEventListener("click", function () {
    let editedAccount = {
      name: editName.value,
      last_name: editLastName.value,
      deposit: editDeposit.value,
      card: editCard.value,
    };
    db[id] = editedAccount;
  });
}
