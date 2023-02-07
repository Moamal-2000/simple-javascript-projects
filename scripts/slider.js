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



// simple effect on click [Next button, Previous Button]
function buttonEffect(ele) {
  if (ele.classList[0] === "prev-button") {
    if (!ele.classList.contains("disabled")) {
      prevButtonIcon.style.color = "white";
      setTimeout(() => {
        prevButtonIcon.style.color = "";
      }, 200);
    }
  } else {
    if (!ele.classList.contains("disabled")) {
      nextButtonIcon.style.color = "white";
      setTimeout(() => {
        nextButtonIcon.style.color = "";
      }, 200);
    }
  }
}


prevButton.addEventListener("click", () => buttonEffect(prevButton));
nextButton.addEventListener("click", () => buttonEffect(nextButton));



// Get current item from local storage
let currentItemStorage = localStorage.getItem("currentItem");
if (currentItemStorage !== null) {
  currentItem = currentItemStorage;
}



// Create Li elements and add them depending on the numbers of images
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



// Loop on pagination elements
for (let li = 0; li < pagination.children.length; li++) {
  // on click on one of the li pagination element
  pagination.children[li].addEventListener("click", () => {
    // change current item to the number of li
    currentItem = parseInt(pagination.children[li].textContent);
    localStorage.setItem("currentItem", currentItem);
    checker();
  });
}



checker();

// if (innerWidth < 768 && pagination.children.length >= 18) {
//   pagination.style.display = "none";
// }

// window.onresize = () => {
//   innerWidth > 768
//     ? (pagination.style.display = "flex")
//     : (pagination.style.display = "none");
// };
