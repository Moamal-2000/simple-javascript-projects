"use strict";

let expandingCardImages = Array.from(
  document.querySelectorAll(".expanding-card-container .img")
);

expandingCardImages.forEach((img) => {
  // Remove any active class
  img.addEventListener("click", () => {
    expandingCardImages.forEach((img) => {
      img.classList.remove("active");
    });
    // Add active class on clicked image
    img.classList.add("active");
  });
});
