"use strict";

const prevButton = document.querySelector(".slider-container .prev-button"),
  nextButton = document.querySelector(".slider-container .next-button"),
  prevButtonIcon = document.querySelector(".slider-container .prev-button i"),
  nextButtonIcon = document.querySelector(".slider-container .next-button i"),
  pagination = document.querySelector(".pagination"),
  images = Array.from(
    document.querySelectorAll(".slider-container .images-holder img")
  );

let numberOfImages = images.length,
  currentItem = 1;

// click on icons previous or next buttons to add simple effect
prevButton.addEventListener("click", () => {
  if (!prevButton.classList.contains("disabled")) {
    prevButtonIcon.style.color = "white";
    setTimeout(() => {
      prevButtonIcon.style.color = "";
    }, 200);
  }
});
nextButton.addEventListener("click", () => {
  if (!nextButton.classList.contains("disabled")) {
    nextButtonIcon.style.color = "white";
    setTimeout(() => {
      nextButtonIcon.style.color = "";
    }, 200);
  }
});

// Set and Get current item from local storage
let currentItemStorage = localStorage.getItem("currentItem");
if (currentItemStorage !== null) {
  currentItem = currentItemStorage;
}

// Create Li elements and add them depending on count of images
for (let i = 0; i < numberOfImages; i++) {
  let li = document.createElement("li");
  li.appendChild(document.createTextNode(i + 1));
  pagination.append(li);
}

function checker() {
  removeActiveClasses();
  // Add class active on current image
  images[currentItem - 1].classList.add("active");
  // Add class active on current pagination
  pagination.children[currentItem - 1].classList.add("active");

  currentItem == 1
    ? prevButton.classList.add("disabled")
    : prevButton.classList.remove("disabled");

  currentItem == numberOfImages
    ? nextButton.classList.add("disabled")
    : nextButton.classList.remove("disabled");
}

function removeActiveClasses() {
  images.forEach((img) => {
    img.classList.remove("active");
  });

  for (let i = 0; i < pagination.children.length; i++) {
    pagination.children[i].classList.remove("active");
  }
}

function nextImg() {
  if (!nextButton.classList.contains("disabled")) {
    currentItem++;
    localStorage.setItem("currentItem", currentItem);
  }
  checker();
}

function prevImg() {
  if (!prevButton.classList.contains("disabled")) {
    currentItem--;
    localStorage.setItem("currentItem", currentItem);
  }
  checker();
}
nextButton.addEventListener("click", nextImg);
prevButton.addEventListener("click", prevImg);

for (let li = 0; li < pagination.children.length; li++) {
  pagination.children[li].addEventListener("click", () => {
    currentItem = parseInt(pagination.children[li].textContent);
    localStorage.setItem("currentItem", currentItem);
    checker();
  });
}

if (innerWidth < 768 && pagination.children.length >= 18) {
  pagination.style.display = "none";
}

window.onresize = () => {
  innerWidth > 768
    ? (pagination.style.display = "flex")
    : (pagination.style.display = "none");
};

checker();
