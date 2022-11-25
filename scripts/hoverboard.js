let hoverboardContainer = document.querySelector(".hoverboard-container");
let hoverboardStyleButton = document.querySelector(
  ".hoverboard-container .hoverboard-style"
);
let numberOfBoxes = 390;
let hoverColors = ["#8e44ad", "#3498db", "#2ecc71", "#e74c3c", "#e67e22"];

if (innerWidth <= 768 && innerWidth >= 580) numberOfBoxes = 207;
else if (innerWidth <= 580) numberOfBoxes = 125;

(function createBoxes() {
  for (let i = 0; i <= numberOfBoxes; i++) {
    let span = document.createElement("span");
    span.classList.add("box");
    hoverboardContainer.appendChild(span);

    span.addEventListener("mouseenter", () => {
      let randomNumber = Math.floor(Math.random() * hoverColors.length);
      span.style.transition = "0s";
      span.style.backgroundColor = hoverColors[randomNumber];
      span.style.boxShadow = `0 0 10px ${hoverColors[randomNumber]}`;
    });

    span.addEventListener("mouseout", () => {
      span.style.transition = "2s";
      span.style.backgroundColor = "";
      span.style.boxShadow = "";
    });
  }
})();

let hoverboardStyleSwitcher = false;
hoverboardStyleButton.addEventListener("click", () => {
  const boxes = document.querySelectorAll(".hoverboard-container .box");

  boxes.forEach((box) => {
    if (!hoverboardStyleSwitcher) {
      box.style.transition = "0s";
      hoverboardContainer.classList.add("style");
      hoverboardStyleSwitcher = !hoverboardStyleSwitcher;
    } else {
      box.style.transition = "0s";
      hoverboardContainer.classList.remove("style");
      hoverboardStyleSwitcher = !hoverboardStyleSwitcher;
    }
  });
});
