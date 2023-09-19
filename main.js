"use strict";
let secNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let heighScore = 0;
let total = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);
  // no number
  if (!guess) {
    displayMessage("No Number...");
  }
  //  number is true
  else if (guess === secNumber) {
    document.querySelector(".number").textContent = secNumber;
    displayMessage("congrats you win");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.color = "red";
    document.querySelector(".number").style.width = "30rem";
    total += score;
    document.querySelector(".total").textContent = total;
    if (heighScore < score) {
      heighScore = score;
      document.querySelector(".highscore").textContent = heighScore;
    }
    if (heighScore === 20) {
      document.querySelector("body").style.backgroundColor = "#60b347";
      displayMessage("game ended you win");
    }
  }
  // Number isnt true
  else if (guess !== secNumber) {
    if (score > 1) {
      displayMessage(
        guess > secNumber ? "number is too high" : "number is too low"
      );
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("you lost ");
      document.querySelector(".score").textContent = 0;
    }
  }
});
// try again btn
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.swidth = "15rem";
  document.querySelector(".guess").value = "";
  displayMessage("Start guessing... ");
});
