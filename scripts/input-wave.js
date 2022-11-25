let allInputs = document.querySelectorAll(
  ".project .form1 .inputs-container .input input"
);
let inputLabels = document.querySelectorAll(
  ".project .form1 .inputs-container .input label"
);

inputLabels.forEach((label) => {
  // Store Label text in variable
  let labelText = label.textContent;
  // Remove text from label
  label.textContent = "";
  // Get length of label's letters
  let lengthLetters = Array.from(labelText).length;
  // Create spans depending on the length of labels's letters
  for (let i = 0; i < lengthLetters; i++) {
    let span = document.createElement("span");
    span.className = "animated-letter";
    let letter = document.createTextNode(Array.from(labelText[i]));
    span.appendChild(letter);
    label.appendChild(span);
  }
});

const emailLabel = document.querySelector(
    ".form1 .inputs-container .input .email-label"
  ),
  passwordLabel = document.querySelector(
    ".form1 .inputs-container .input .password-label"
  ),
  emailInput = document.getElementById("email"),
  passwordInput = document.getElementById("password");

function checkCharInputFocus(input, letters) {
  letters = Array.from(letters);

  // If input is empty
  if (input.value === "") {
    letters.forEach((letter) => {
      letter.style.transform = "translateY(-30px)";
      letter.style.color = "#add8e6";
    });
  }

  // if input contains letters
  else if (input.value.length > 0) {
    letters.forEach((letter) => (letter.style.transform = "translateY(-30px)"));
  }
}

function checkCharInputBlur(input, letters) {
  letters = Array.from(letters);

  // If input is not empty
  if (input.value !== "") {
    letters.forEach((letter) => {
      letter.style.transform = "translateY(-30px)";
      letter.style.color = "#add8e6";
    });
  }

  // if input contains letters
  else if (input.value.length > 0) {
    letters.forEach((letter) => {
      letter.style.transform = "translateY(-30px)";
      letter.style.color = "#fff";
    });
  }

  // let the letters back if input is empty
  else {
    letters.forEach((letter) => {
      letter.style.transform = "translateY(0)";
      letter.style.color = "#fff";
    });
  }
}

emailInput.addEventListener("focus", () => {
  checkCharInputFocus(emailInput, emailLabel.children);
});
emailInput.addEventListener("blur", () => {
  checkCharInputBlur(emailInput, emailLabel.children);
});

passwordInput.addEventListener("focus", () => {
  checkCharInputFocus(passwordInput, passwordLabel.children);
});
passwordInput.addEventListener("blur", () => {
  checkCharInputBlur(passwordInput, passwordLabel.children);
});
