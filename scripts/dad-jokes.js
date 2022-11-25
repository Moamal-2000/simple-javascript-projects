"use strict";

const jokeElement = document.querySelector(".jokes-container .joke-content"),
  nextJoke = document.querySelector(".jokes-container .next-joke");

let jokes = [
  "What kind of music do planets listen to? Nep-tunes.",
  "What did the Buffalo say to his little boy when he dropped him off at school? Bison.",
  "So a duck walks into a pharmacy and says “Give me some chap-stick… and put it on my bill”",
  "What happens when you anger a brain surgeon? They will give you a piece of your mind.",
  "Shout out to my grandma, that's the only way she can hear.",
  "Why are skeletons so calm? Because nothing gets under their skin.",
  "They tried to make a diamond shaped like a duck. It quacked under the pressure.",
  "Why do bananas have to put on sunscreen before they go to the beach? Because they might peel!",
  "Two peanuts were walking down the street. One was a salted",
  "What did the digital clock say to the grandfather clock? Look, no hands!",
  "How did the hipster burn the roof of his mouth? He ate the pizza before it was cool.",
  "Why do ducks make great detectives? They always quack the case.",
  "What do you call a dictionary on drugs? High definition.",
  "What's red and bad for your teeth? A Brick.",
  "Last night me and my girlfriend watched three DVDs back to back. Luckily I was the one facing the TV.",
  "What did the Zen Buddist say to the hotdog vendor? Make me one with everything.",
];
let currentJoke = 0;

const addNextJoke = () => {
  currentJoke++;
  if (currentJoke < jokes.length) jokeElement.textContent = jokes[currentJoke];
  else jokeElement.textContent = "Enough jokes for today";

  // Button effect
  nextJoke.style.transform = "scale(0.992)";
  setTimeout(() => (nextJoke.style.transform = "scale(1)"), 200);
};

nextJoke.addEventListener("click", () => addNextJoke());

// Show First Joke
jokeElement.textContent = jokes[currentJoke];
