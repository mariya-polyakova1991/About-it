$(document).ready(function () {
  $("#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4").click(function () {
    $(this).toggleClass("open");
  });
});

// Меню
let menu = document.querySelector(".menu");

menu.onclick = function () {
  menu.classList.toggle("menu-open");
  menu.classList.toggle("menu-close");
};
