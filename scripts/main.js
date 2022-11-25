"use strict";

let scrollProgress = document.createElement("span");
scrollProgress.className = "scroll-progress";
document.body.prepend(scrollProgress);

window.onscroll = () => {
  let height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  scrollProgress.style.width = `${(scrollY / height) * 100}%`;
};

// Netflix nav

const showNav = document.querySelector(".show-netflix-nav"),
  netflixNav = document.querySelector(".netflix-nav"),
  closeNav = document.querySelector(".netflix-nav .content .close"),
  soundEffect = new Audio(`sound-effect/nav-netflix-sound-effect.mp3`);

showNav.onclick = () => {
  netflixNav.classList.add("active");
  closeNav.classList.add("active");
  document.documentElement.style.setProperty("--nav-effect-width", "24px");
  soundEffect.volume = 0.1;
  soundEffect.play();
  setTimeout(() => {
    soundEffect.volume = 0.5;
  }, 300);
};

closeNav.onclick = () => {
  netflixNav.classList.remove("active");
  closeNav.classList.remove("active");
  document.documentElement.style.setProperty("--nav-effect-width", "450px");
  soundEffect.play();
  setTimeout(() => {
    soundEffect.volume = 0.1;
  }, 100);
};
