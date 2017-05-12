var writeUsOpen = document.querySelector(".js-button-write-us");
var writeUs = document.querySelector(".write-us");
var writeUsClose = writeUs.querySelector(".popup-close");
var fieldUserName = writeUs.querySelector(".js-username");
var fieldUserEmail = writeUs.querySelector(".js-email");
var fieldUserEmailText = writeUs.querySelector(".write-us-input--textarea");
var form = writeUs.querySelector("form");

var mapOpen = document.querySelector(".map-container");
var map = document.querySelector(".popup-map");
var mapClose = map.querySelector(".popup-close");

var storageUserName = localStorage.getItem("userName");
var storageEmail = localStorage.getItem("userEmail");

writeUsOpen.addEventListener("click", function(event) {
  event.preventDefault();
  writeUs.classList.add("show-popup");
  if (storageUserName) {
    fieldUserName.value = storageUserName;
    if (storageEmail) {
      fieldUserEmail.value = storageEmail;
      fieldUserEmailText.focus();
    } else {
      fieldUserEmail.focus();
    }
  } else {
    fieldUserName.focus();
  }
});

form.addEventListener("submit", function(event) {
  if (!fieldUserName.value || !fieldUserEmail.value) {
    event.preventDefault();
    writeUs.classList.remove("popup-error");
    writeUs.offsetWidth = writeUs.offsetWidth;
    writeUs.classList.add("popup-error");
  } else {
    localStorage.setItem("userName", fieldUserName.value);
    localStorage.setItem("userEmail", fieldUserEmail.value);
  }
});

writeUsClose.addEventListener("click", function (event) {
  event.preventDefault();
  writeUs.classList.remove("show-popup");
});

mapOpen.addEventListener("click", function (event) {
  event.preventDefault();
  map.classList.add("show-popup");
});

mapClose.addEventListener("click", function (event) {
  event.preventDefault();
  map.classList.remove("show-popup");
});

window.addEventListener("keydown", function (event) {
  if (event.keyCode === 27) {
    if (map.classList.contains("show-popup")) {
      map.classList.remove("show-popup");
    }
    if (writeUs.classList.contains("show-popup")) {
      writeUs.classList.remove("show-popup");
    }
  }
});
