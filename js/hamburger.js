$(document).ready(function () {
  const menu = $("#nav-icon3");
  console.log("menu", menu);
  menu.click(function () {
    $(this).toggleClass("open");
  });
});

// main-menu
const menu = document.querySelector(".menu");
menu.addEventListener("click", function () {
  menu.classList.toggle("menu-open");
  menu.classList.toggle("menu-close");
});
