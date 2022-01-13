let buttons = document.querySelectorAll("button");
let views = document.querySelectorAll(".view");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", changeView);
}

function changeView() {
  for (let i = 0; i < views.length; i++) {
    views[i].style.display = "none";
  }
  let dataView = this.getAttribute("data-view");
  let currentView = document.querySelector(
    "section[data-view=" + dataView + "]"
  );
  currentView.style.display = "block";
}

(function () {
  let videoPlayer = {
    shortVideo: document.querySelector("#shortVideo"),
    btnPlay: document.querySelector("#btnPlay"),
    btnReload: document.querySelector("#btnReload"),
    init: function () {
      btnPlay.addEventListener("click", videoPlayer.play);
      btnReload.addEventListener("click", videoPlayer.reload);
    },
    play: function () {
      let currentClass = btnPlay.className;
      console.log(currentClass);

      if (currentClass == "fas fa-play") {
        videoPlayer.shortVideo.play();
        btnPlay.className = "fas fa-pause";
      } else {
        videoPlayer.shortVideo.pause();
        btnPlay.className = "fas fa-play";
      }
    },
    reload: function () {
      videoPlayer.shortVideo.load();
      btnPlay.className = "fas fa-play";
    },
  };
  videoPlayer.init();
})();

// if (tool === "Computer" && music !== "Rock" && !(project === "Car")) {
//   thisDiv.style.color = "blue";
// }
