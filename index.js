const btn = document.querySelector(".btn");
const display = document.querySelector(".display");
const numOfLetters = document.querySelector(".letters-num");

const wovs = ["A", "E", "I", "O", "U", "Y"];

const cons = [
  "B",
  "C",
  "D",
  "F",
  "G",
  "H",
  "J",
  "K",
  "L",
  "M",
  "N",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "V",
  "W",
  "X",
  "Z",
];

btn.addEventListener("click", createWord);

function chooseLetter() {
  let randomNumber = Math.floor(Math.random() * 2);

  let letter = "";

  if (randomNumber === 0) {
    letter = wovs[Math.floor(Math.random() * wovs.length)];
  } else {
    letter = cons[Math.floor(Math.random() * cons.length)];
  }

  return letter;
}

function createWord() {
  const number = numOfLetters.value;
  let word = "";

  for (let i = 0; i <= number - 1; i++) {
    let chosenLetter = chooseLetter();
    word += chosenLetter;
  }

  display.textContent = word;
}
