let btnSearchAccount = document.querySelector("[data-btn=view_search_account]");
let btnAddAccount = document.querySelector("[data-btn=view_add_account]");

let viewSearchAccount = document.querySelector(
  "[data-btn=view_search_account]"
);
let viewAddAccount = document.querySelector("[data-btn=view_add_account]");

let allViews = document.querySelectorAll(".view");
let buttons = document.querySelectorAll(".button");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", displayThisView);
}
for (let i = 0; i < allViews.length; i++) {
  allViews[i].style.display = "none";
}

function displayThisView() {
  for (let i = 0; i < allViews.length; i++) {
    allViews[i].style.display = "none";
  }

  let btnCLicked = this.getAttribute("data-btn");
  let currentView = document.querySelector(
    "section[data-btn= " + btnCLicked + "]"
  );
  currentView.style.display = "block";
}
