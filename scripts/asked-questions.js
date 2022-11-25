"use strict";

const questionBoxes = document.querySelectorAll(".FAQ-container .question-box"),
  showAnswerButtons = document.querySelectorAll(
    ".FAQ-container .question-box .basic-view .show"
  ),
  closeAnswerButtons = document.querySelectorAll(
    ".FAQ-container .question-box .basic-view .close"
  ),
  theAnswers = document.querySelectorAll(
    ".FAQ-container .question-box .answer"
  );

theAnswers.forEach((answer) => (answer.style.display = "none"));
closeAnswerButtons.forEach((button) => (button.style.display = "none"));

let questionButtonsSwitchers = [];

questionBoxes.forEach((box) => questionButtonsSwitchers.push(false));

for (let i = 0; i < showAnswerButtons.length; i++) {
  showAnswerButtons[i].addEventListener("click", () => {
    if (!questionButtonsSwitchers[i]) {
      theAnswers[i].style.display = "block";
      showAnswerButtons[i].style.display = "none";
      closeAnswerButtons[i].style.display = "block";
      questionBoxes[i].style.backgroundColor = "#fff";
      questionBoxes[i].style.boxShadow = '0 4px 10px #8a8a8a4e'
      questionButtonsSwitchers[i] = !questionButtonsSwitchers[i];
    }
  });

  closeAnswerButtons[i].addEventListener("click", () => {
    if (questionButtonsSwitchers[i]) {
      theAnswers[i].style.display = "none";
      showAnswerButtons[i].style.display = "block";
      closeAnswerButtons[i].style.display = "none";
      questionBoxes[i].style.backgroundColor = ""; // default color
      questionBoxes[i].style.boxShadow = 'none'
      questionButtonsSwitchers[i] = !questionButtonsSwitchers[i];
    }
  });
}
