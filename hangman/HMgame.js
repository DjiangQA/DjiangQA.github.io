let name = "";
let word = "";
let life = 0;
let gamePlayed = 0;
let gameLost = 0;
let gameWon = 0;
let winPercentage = 0;
let leastGuesses = 0;
let mostGuesses = 0;
let wordlen = 0;
let wordlist = [];
let wordlistfile = "Wordlist.txt";
let unknownLetter = "_ ";
let array_unknownLetter = [];
let array_InputLetter = [];
let score = 0;
let attempt = 0;
let found_Word = false;

function get() {
  let url =
    "https://raw.githubusercontent.com/dwyl/english-words/master/words_alpha.txt";

  let xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      wordlist = this.responseText.split("\n");
      Results();
    }
  };

  xhr.open("GET", url, true);

  xhr.send();
}

let gamestatus_display = document.createElement("h1");
gamestatus_display.id = "gamestatus_display";

let stickman0_display = document.createElement("p");
stickman0_display.id = "stickman0_display";

let stickman1_display = document.createElement("p");
stickman1_display.id = "stickman1_display";

let stickman2_display = document.createElement("p");
stickman2_display.id = "stickman2_display";

let stickman3_display = document.createElement("p");
stickman3_display.id = "stickman3_display";

let stickman4_display = document.createElement("p");
stickman4_display.id = "stickman4_display";

let stickman5_display = document.createElement("p");
stickman5_display.id = "stickman5_display";

let name_display = document.createElement("p");
name_display.id = "name_display";

let life_display = document.createElement("p");
life_display.id = "life_display";

life_display.textContent = "Your current life is: 0";
document.getElementById("life").appendChild(life_display);

let score_display = document.createElement("p");
score_display.id = "score_display";

score_display.textContent = "Your current score is: 0";
document.getElementById("score").appendChild(score_display);

let attempt_display = document.createElement("p");
attempt_display.id = "attempt_display";

attempt_display.textContent = "Your current attempt is: 0";
document.getElementById("attempt").appendChild(attempt_display);

let result_display = document.createElement("p");
result_display.id = "result_display";

let result_display2 = document.createElement("p");
result_display2.id = "result_display2";

function Confirm_playername() {
  document.getElementById("ConfPlayername").disabled = true;
  name = document.getElementById("playername").value;
  name_display.innerHTML = "Hi " + name;
  document.getElementById("Name").appendChild(name_display);
}

function Results() {
  // Generate random
  word = wordlist[Math.floor(Math.random() * wordlist.length)];

  hack = word.split("");
  hack.splice(hack.length - 1, 1);

  word = "";
  for (let XX = 0; XX < hack.length; XX++) {
    word += hack[XX];
  }

  console.log(word);

  wordlen = word.length;

  result_display.innerHTML = "The word length is: " + wordlen + "<br>";
  document.getElementById("result").appendChild(result_display);

  for (let i = 0; i < wordlen; i++) {
    array_unknownLetter.push(unknownLetter);
  }
  result_display2.textContent = array_unknownLetter;
  document.getElementById("result").appendChild(result_display2);
}

function readfile() {
  let allTextLines = [];
  allTextLines = allText.sp;
}

function Check(letter) {
  document.getElementById(letter).disabled = true;

  letter = letter.toLowerCase();
  let letter_Selected = letter;
  let array_knownLetter = word.split("");
  attempt++;

  console.log(array_knownLetter);

  for (let i2 = 0; i2 < array_knownLetter.length; i2++) {
    if (letter === array_knownLetter[i2]) {
      array_unknownLetter[i2] = letter;
      score++;
      found_Word = true;
    }
  }

  if (found_Word == false) {
    life--;
  }

  result_display2.textContent = array_unknownLetter;
  document.getElementById("result").appendChild(result_display2);

  score_display.textContent = "Your current score is: " + score;
  document.getElementById("score").appendChild(score_display);

  life_display.textContent = "Your current life is: " + life;
  document.getElementById("life").appendChild(life_display);

  attempt_display.textContent = "Your current attempt is: " + attempt;
  document.getElementById("attempt").appendChild(attempt_display);

  if (life === 6) {
    stickman1_display.textContent =
      "| \r\n \r\n \r\n \r\n \r\n \r\n \r\n \r\n \r\n |";
  }
  if (life === 5) {
    stickman2_display.textContent = "|  \r\n \r\n \r\n \r\n ( ͡° ͜ʖ ͡°) ";
  }
  if (life === 4) {
    stickman3_display.textContent =
      "| \r\n \r\n \r\n \r\n \r\n \r\n \r\n \r\n \r\n | ";
  }
  if (life === 3) {
    stickman3_display.textContent =
      "| \r\n \r\n \r\n \r\n \r\n \r\n \r\n \r\n \r\n |/ ";
  }
  if (life === 2) {
    stickman3_display.textContent =
      "| \r\n \r\n \r\n \r\n \r\n \r\n \r\n \r\n \r\n \\|/ ";
  }
  if (life === 1) {
    stickman4_display.textContent =
      "| \r\n \r\n \r\n \r\n \r\n \r\n \r\n \r\n \r\n  \\";
  }
  if (life === 0) {
    stickman4_display.textContent =
      "| \r\n \r\n \r\n \r\n \r\n \r\n \r\n \r\n \r\n  /\\";

    gamestatus_display.textContent = "GAME OVER - Please reset game";
    document.getElementById("game_Status").appendChild(gamestatus_display);
  }

  if (score === wordlist.length) {
    gamestatus_display.textContent = "YOU WIN - Please reset game";
    document.getElementById("game_Status").appendChild(gamestatus_display);
  }
}

function newgame() {
  document.getElementById("newgame").disabled = true;
  word = "";
  gamePlayed++;
  wordlen = 0;
  unknownLetter = "_ ";
  array_unknownLetter = [];
  array_InputLetter = [];
  score = 0;
  life = 7;
  attempt = 0;

  life_display.textContent = "Your current life is: " + life;
  document.getElementById("life").appendChild(life_display);

  stickman0_display.textContent = "_____";
  stickman1_display.textContent = "|";
  stickman2_display.textContent = "|";
  stickman3_display.textContent = "|";
  stickman4_display.textContent = "|";
  stickman5_display.textContent = "|_________";

  document.getElementById("stickman0").appendChild(stickman0_display);
  document.getElementById("stickman1").appendChild(stickman1_display);
  document.getElementById("stickman2").appendChild(stickman2_display);
  document.getElementById("stickman3").appendChild(stickman3_display);
  document.getElementById("stickman4").appendChild(stickman4_display);
  document.getElementById("stickman5").appendChild(stickman5_display);
}

function reset() {
  document.getElementById("newgame").disabled = false;
  word = "";
  gamePlayed = 0;
  wordlen = 0;
  unknownLetter = "_ ";
  array_unknownLetter = [];
  array_InputLetter = [];
  score = 0;
  life = 7;
  wordlist = [];

  document.getElementById("stickman0").removeChild(stickman0_display);
  document.getElementById("stickman1").removeChild(stickman1_display);
  document.getElementById("stickman2").removeChild(stickman2_display);
  document.getElementById("stickman3").removeChild(stickman3_display);
  document.getElementById("stickman4").removeChild(stickman4_display);
  document.getElementById("stickman5").removeChild(stickman5_display);

  document.getElementById("game_Status").removeChild(gamestatus_display);
}
