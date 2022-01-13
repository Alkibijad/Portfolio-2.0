let xml = new XMLHttpRequest();
xml.open("GET", "https://rickandmortyapi.com/api/character");
xml.addEventListener("readystatechange", function () {
  if (xml.readyState === 4 && xml.status === 200) {
    localStorage.setItem("data", xml.responseText);
  }
});
xml.send();

let profile = document.querySelector(".profile");
let btnStart = document.querySelector(".btnStart");
let btnBack = document.querySelector(".btnBack");

btnStart.addEventListener("click", incramentCounter);
btnBack.addEventListener("click", decramentCounter);

let counter = -1;
function incramentCounter() {
  if (counter < 19) {
    counter++;
  } else {
    counter = 0;
  }
  displayProfiles(counter);
}

function decramentCounter() {
  if (counter === 0) {
    counter = 19;
  } else {
    counter--;
  }
  displayProfiles(counter);
}

function displayProfiles(counter) {
  let data = JSON.parse(localStorage.getItem("data"));
  let profiles = data.results;
  console.log(profiles);
  btnBack.style.display = "inline-block";
  btnStart.innerHTML = "next image";
  let text = `<div class="profiles-container ">
                <div class="profiles-detail">
                 <div class="detail">${profiles[counter].name}</div>
                 <div class="detail">${profiles[counter].species}</div>
                 <div class="detail">${profiles[counter].status}</div></div>   
                </div>
                
              <div class="profile-card"
              style = "background-image: url(${profiles[counter].image})">
              </div>
                 `;
  profile.innerHTML = text;
}

let btnNext = document.querySelector(".btnNext");
btnNext.addEventListener("mouseover", function () {
  let currentHTML = btnNext.innerHTML;
  let newInnerHtml = "<i class='fas fa-arrow-right'></i>";
  if (currentHTML == "next image") {
    btnNext.innerHTML = newInnerHtml;
  }
});
btnNext.addEventListener("mouseleave", function () {
  btnNext.innerHTML = "next image";
});

btnBack.addEventListener("mouseover", function () {
  console.log("radi");
  let currentHTML = btnBack.innerHTML;
  let newInnerHtml = "<i class='fas fa-arrow-left'></i>";
  if (currentHTML == "previous image") {
    btnBack.innerHTML = newInnerHtml;
  }
});
btnBack.addEventListener("mouseleave", function () {
  btnBack.innerHTML = "previous image";
});
