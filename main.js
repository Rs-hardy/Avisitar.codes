const popup = document.getElementById("popup");
const closeBtn = document.querySelector(".close-btn");

closeBtn.addEventListener("click", function () {
  popup.style.display = "none";
});

window.addEventListener("load", function () {
  popup.style.display = "block";
});
