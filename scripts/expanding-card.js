"use strict";

let expandingCardImages = document.querySelectorAll(
  ".expanding-card-container .img"
);

expandingCardImages.forEach((img) => {
  img.addEventListener("click", () => {
    expandingCardImages.forEach((img) => img.classList.remove("active"));
    img.classList.add("active");
  });
});
