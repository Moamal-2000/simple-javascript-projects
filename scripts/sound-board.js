"use strict";

let soundsBoard = [];
// Store all sounds in a variable
for (let i = 1; i <= 10; i++) {
  soundsBoard.push(new Audio(`sound-effect/number${i}.mp3`));
}

// Get All numbers Buttons From the page
let numbersButtons = document.querySelectorAll(
  ".sound-board-container .number"
);

// Add event click on all numbers to active sound effect
for (let i = 0; i < soundsBoard.length; i++) {
  numbersButtons[i].addEventListener("click", () => {
    soundsBoard[i].play();
  });
}
