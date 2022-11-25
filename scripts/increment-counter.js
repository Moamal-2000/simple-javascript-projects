"use strict";

let followers = document.querySelectorAll(
  ".increment-counter-container .box .followers"
);
let counterSection = document.querySelector(".increment-counter-container");
let counterStarted = false;

window.addEventListener("scroll", () => {
  if (window.scrollY + 300 >= counterSection.offsetTop && !counterStarted) {
    followers.forEach((follower) => startCount(follower));
    counterStarted = true;
  }
});

function startCount(element) {
  let goal = element.dataset.followers;

  let counter = setInterval(() => {
    element.textContent = parseInt(element.textContent) + 47;
    if (parseInt(element.textContent) >= goal) {
      element.textContent = goal;
      clearInterval(counter);
    }
  }, 2000 / goal);
}
