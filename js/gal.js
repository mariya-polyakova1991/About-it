const photos = [
  "img/home/team4.png",
  "img/blog/causes/causes-3.jpg",
  "img/blog/causes/causes-2.jpg",
  "img/blog/causes/causes-4.jpg",
  "img/blog/causes/causes-1.jpg",
];

const thumbnails = document.querySelectorAll(".gallery__photo-preview");
const fullPhoto = document.querySelector(".full-photo");

const addThumbnailClickHandler = function (thumbnail, photo) {
  thumbnail.addEventListener("click", function () {
    fullPhoto.src = photo;
  });
};

for (let i = 0; i < thumbnails.length; i++) {
  addThumbnailClickHandler(thumbnails[i], photos[i]);
}
