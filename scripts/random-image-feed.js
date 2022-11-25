const imagesUrl = "https://source.unsplash.com/random/";
const imagesContainer = document.querySelector(".random-image-feed-container");
let rows = 3;

for (let i = 0; i < rows * 3; i++) {
  let img = document.createElement("img");
  img.src = `${imagesUrl + randomNumber()}x${randomNumber()}`;
  // img.setAttribute("loading", "lazy");

  let imgHolder = document.createElement("div");
  imgHolder.classList.add("image");

  imgHolder.appendChild(img);
  imagesContainer.appendChild(imgHolder);
}

function randomNumber() {
  // Random number from 300 to 350
  return Math.floor(Math.random() * 50) + 300;
}