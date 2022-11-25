"use strict";

let input = document.querySelector(".input-max-length-form .input input"),
  progress = document.querySelector(".input-max-length-form .input .progress"),
  maxLengthCounter = document.querySelector(
    ".input-max-length-form .input .count"
  ),
  showPass = document.querySelector(".input-max-length-form .input .show-pass"),
  maxLength = input.maxLength;

input.addEventListener("input", () => {
  maxLengthCounter.innerHTML = maxLength - input.value.length;
  maxLengthCounter.innerHTML == 0
    ? maxLengthCounter.classList.add("zero")
    : maxLengthCounter.classList.remove("zero");

  let lengthProgress = `${(input.value.length * 100) / maxLength}%`;
  progress.style.width = lengthProgress;

  maxLengthCounter.innerHTML == 0
    ? showPass.classList.add("max")
    : showPass.classList.remove("max");
});

showPass.addEventListener("input", () =>
  showPass.checked == true ? (input.type = "text") : (input.type = "password")
);
