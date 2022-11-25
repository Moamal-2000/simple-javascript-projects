"use strict";

const keyCodesContainer = document.querySelector(".keycodes-container"),
  keyCodesMsg = document.querySelector(".keycodes-container .press-key-msg"),
  spanKey = document.createElement("span"),
  spanCode = document.createElement("span"),
  spanKeyCode = document.createElement("span");

spanKey.className = "key-event";
spanCode.className = "key-event";
spanKeyCode.className = "key-event";
spanKey.style.display = "none";
spanCode.style.display = "none";
spanKeyCode.style.display = "none";

keyCodesContainer.append(spanKey, spanCode, spanKeyCode);
let keyCodeMsgSwitcher = false;

document.addEventListener("keydown", (e) => {
  if (!keyCodeMsgSwitcher) {
    keyCodesMsg.remove();
    spanKey.style.display = "flex";
    spanCode.style.display = "flex";
    spanKeyCode.style.display = "flex";
    keyCodeMsgSwitcher = true;
  }
  e.key == " "
    ? (spanKey.textContent = "Space")
    : (spanKey.textContent = e.key);
  spanCode.textContent = e.code;
  spanKeyCode.textContent = e.keyCode;
});
