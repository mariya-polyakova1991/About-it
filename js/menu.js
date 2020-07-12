const foto = document.querySelectorAll(".products-foto");

const menu = document.querySelectorAll(".menu-foto");

function deleteClass() {
  foto.forEach(function (elem) {
    elem.classList.remove("foto-active");
  });
  menu.forEach(function (elem) {
    elem.classList.remove("btn-active");
  });
}

menu.forEach(function (elem, i) {
  elem.addEventListener("click", function () {
    if (i === 0) {
      deleteClass();
      menu[i].classList.add("btn-active");
      foto.forEach(function (elem) {
        elem.classList.add("foto-active");
      });
    } else {
      deleteClass();
      foto[i].classList.add("foto-active");
      menu[i].classList.add("btn-active");
    }
  });
});
