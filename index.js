const genBtn = document.querySelector(".gen-btn");
const display = document.querySelector(".display");
const numOfLetters = document.querySelector(".letters-num");
const saveBtn = document.querySelector(".save-btn");
const mutateBtn = document.querySelector(".mutate-btn");

const delIcon = `<img src="delete.svg" width="15">`;
const saveIcon = `<img src="save.svg" width="20">`;

saveBtn.innerHTML = saveIcon;

const wovs = ["A", "E", "I", "O", "U"];

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
  "Y",
  "Z",
];

genBtn.addEventListener("click", createWord);

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

const savedWordsDisplay = document.querySelector(".display_words");

function saveWord() {
  const savedWord = display.textContent;

  const savedWordInList = document.createElement("li");
  const savedWordWord = document.createElement("p");
  savedWordInList.appendChild(savedWordWord);
  savedWordWord.textContent = savedWord;
  savedWordWord.className = "p-word";
  savedWordInList.className = "saved-li";

  const delBtn = document.createElement("button");
  delBtn.className = "del-btn";
  delBtn.innerHTML = delIcon;
  delBtn.dataset.action = "delete";

  const btnDiv = document.createElement("div");

  btnDiv.appendChild(delBtn);

  savedWordInList.appendChild(btnDiv);
  savedWordsDisplay.appendChild(savedWordInList);
}

saveBtn.addEventListener("click", saveWord);

function deleteWord(event) {
  if (event.target.dataset.action === "delete") {
    const parentLi = event.target.closest("li");
    parentLi.remove();
  }
}

savedWordsDisplay.addEventListener("click", deleteWord);

function mutate() {
  let word = display.textContent;

  const newLetter = chooseLetter();
  const letterToMutate = Math.floor(Math.random() * word.length);
  const newWord =
    word.substring(0, letterToMutate) +
    newLetter +
    word.substring(letterToMutate + 1);

  display.textContent = newWord;

  console.log(word);
}

mutateBtn.addEventListener("click", mutate);

// Write a function to hide save and mutate buttons
