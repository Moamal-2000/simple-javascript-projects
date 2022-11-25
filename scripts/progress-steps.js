"user strict";

const progressSteps = Array.from(
    document.querySelectorAll(".progress-steps-container .steps .step")
  ),
  progressStepsNextButton = document.querySelector(
    ".progress-steps-container .next-button"
  ),
  progressStepsPrevButton = document.querySelector(
    ".progress-steps-container .prev-button"
  );

let currentProgress = 1;
let numberOfSteps = progressSteps.length;

document.documentElement.style.setProperty("--progress-steps", "0");

progressStepsNextButton.addEventListener("click", () => {
  if (!progressStepsNextButton.classList.contains("disabled")) {
    progressSteps[currentProgress - 1].classList.add("active");
    progressSteps[currentProgress].classList.add("bordered");
    if (innerWidth > 480) {
      document.documentElement.style.setProperty("--progress-steps", "85px");
    } else {
      document.documentElement.style.setProperty("--progress-steps", "40px");
    }
    currentProgress++;
    stepsChecker();
  }
});

progressStepsPrevButton.addEventListener("click", () => {
  if (!progressStepsPrevButton.classList.contains("disabled")) {
    progressSteps[currentProgress - 2].classList.remove("active");
    progressSteps[currentProgress - 1].classList.remove("bordered");
    currentProgress--;
    stepsChecker();
  }
});

function stepsChecker() {
  currentProgress == 1
    ? progressStepsPrevButton.classList.add("disabled")
    : progressStepsPrevButton.classList.remove("disabled");

  currentProgress == numberOfSteps
    ? progressStepsNextButton.classList.add("disabled")
    : progressStepsNextButton.classList.remove("disabled");
}

stepsChecker();
