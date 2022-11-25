let boxesOfContent = Array.from(
  document.querySelectorAll(".scroll-animation-container .box-of-content")
);

window.addEventListener("scroll", () => {
  boxesOfContent.forEach((box) => {
    let boxTrig = (window.innerHeight / 5) * 4;
    let boxTop = box.getBoundingClientRect().top;
    boxTrig > boxTop 
    ? box.classList.add("show")
    : box.classList.remove("show");
  });
});
