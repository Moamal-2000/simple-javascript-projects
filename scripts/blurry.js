const blurryImg = document.querySelector(".blurry-loading"),
  blurryTimerEle = document.createElement("span");

blurryTimerEle.appendChild(document.createTextNode("0%"));
blurryImg.appendChild(blurryTimerEle);
blurryTimerEle.style.cssText = `
color: #000;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
font-size: 40px;
letter-spacing: 2px;`;
let blurryTimerSwitch = false;

window.addEventListener("scroll", () => {
  if (scrollY > innerHeight - blurryImg.scrollHeight + 1500) {
    document.documentElement.style.setProperty("--blur-degree", "0px");
    startTimer(blurryTimerEle);
  }
});

function startTimer(element) {
  if (!blurryTimerSwitch) {
    let add = 0;
    let timer = setInterval(() => {
      element.textContent = `${add}%`;
      add++;
      if (add == 100) {
        element.textContent = `100%`;
        clearInterval(timer);
        setTimeout(() => {
          element.textContent = "😉👌";
          setTimeout(() => element.remove(), 2000);
        }, 600);
      }
    }, 28);
    blurryTimerSwitch = !blurryTimerSwitch;
  }
}
