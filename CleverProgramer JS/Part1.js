/* // const names=["Manav",'Qazi','Sholay']
function yo(yorName) {
  var result = "Hello " + yorName;
  var ot = document.querySelector("p");
  ot.innerHTML = `${result}`;
}
// var names = prompt("What is your name");
yo();

let obj = {
  first: "yo",
  second: "go",
  age: 14,
  getfun: function () {
    obj.age++;
    return this.second + "\n" + this.first + "\n" + this.age;
  },
};
console.log(obj.getfun());
 */

// ***********Your age in days
function ageInDays() {
  let years = prompt("How many years old you are ?");
  let days = years * 365;
  let h2 = document.createElement("h1");
  let dis = document.createTextNode("You are " + days + " days Old.");
  h2.setAttribute("id", "ageInDays");
  h2.appendChild(dis);

  document.getElementById("flex-box-result").appendChild(h2);
}
function reset() {
  document.getElementById("ageInDays").remove();
}
// ********CHALLENGE 2******
function genrator() {
  let image = document.createElement("img");
  let div = document.getElementById("flex-cat-gen");
  image.src = "https://picsum.photos/200";
  div.appendChild(image);
}

// **challenge 3********
function rpsGames(yourChoice) {
  console.log(yourChoice.id);
  let humanChoice, botChoice;
  humanChoice = yourChoice.id;
  botChoice = numberToChoice(randToRpsInt());
  console.log("computer choice", botChoice);
  results = decideWinner(humanChoice, botChoice);
  console.log(results);
  message = finalMessage(results);
  console.log(message);

  rpsFrontEnd(yourChoice.id, botChoice, message);
}

function randToRpsInt() {
  return Math.floor(Math.random() * 3);
}

function numberToChoice(number) {
  return ["Rock", "Paper", "Scissor"][number];
}

function decideWinner(yourChoice, computerChoice) {
  let rpsDataBase = {
    Rock: { Scissor: 1, Rock: 0.5, Paper: 0 },
    Paper: { Rock: 1, Paper: 0.5, Scissor: 0 },
    Scissor: { Paper: 1, Scissor: 0.5, Rock: 0 },
  };

  let yourScore = rpsDataBase[yourChoice][computerChoice];
  let computerScore = rpsDataBase[computerChoice][yourChoice];

  return [yourScore, computerScore];
}

function finalMessage([yourScore, computerScore]) {
  if (yourScore === 0) {
    return { message: "You Lost", color: "red" };
  } else if (yourScore === 0.5) {
    return { message: "You Tied", color: "Yellow" };
  } else {
    return { message: "You Won", color: "Green" };
  }
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
  let imagesDatabase = {
    Rock: document.getElementById("Rock").src,
    Paper: document.getElementById("Paper").src,
    Scissor: document.getElementById("Scissor").src,
  };
  //let's remove all the images
  document.getElementById("Rock").remove();
  document.getElementById("Paper").remove();
  document.getElementById("Scissor").remove();

  //let's get back the Image
  let humanDiv = document.createElement("div");
  let botDiv = document.createElement("div");
  let messageDiv = document.createElement("div");

  humanDiv.innerHTML =
    "<img src='" +
    imagesDatabase[humanImageChoice] +
    "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37,50,233,1)'>";
  document.getElementById("flex-box-rps").appendChild(humanDiv);

  messageDiv.innerHTML =
    "<h1 style='color: " +
    finalMessage["color"] +
    "; font-size: 50px ; padding:30px;'>" +
    finalMessage["message"] +
    "</h1>";
  document.getElementById("flex-box-rps").appendChild(messageDiv);

  botDiv.innerHTML =
    "<img src='" +
    imagesDatabase[botImageChoice] +
    "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243,38,24,1)'>";
  document.getElementById("flex-box-rps").appendChild(botDiv);
}

// *****CHallenge 4 change the color of all the buttons*******
let all_buttons = document.getElementsByTagName("button");
// console.log(all_buttons);

let copyAllButtons = [];
for (let i = 0; i < all_buttons.length; i++) {
  copyAllButtons.push(all_buttons[i].classList[1]);
}
// console.log(copyAllButtons);

function buttonColorChange(buttonThingy) {
  if (buttonThingy.value === "red") {
    buttonsRed();
  } else if (buttonThingy.value === "yellow") {
    buttonsYellow();
  } else if (buttonThingy.value === "reset") {
    buttonsColorReset();
  } else if (buttonThingy.value === "random") {
    randomColors();
  }

  function buttonsRed() {
    for (let i = 0; i < all_buttons.length; i++) {
      all_buttons[i].classList.remove(all_buttons[i].classList[1]);
      all_buttons[i].classList.add("btn-danger");
    }
  }

  function buttonsYellow() {
    for (let i = 0; i < all_buttons.length; i++) {
      all_buttons[i].classList.remove(all_buttons[i].classList[1]);
      all_buttons[i].classList.add("btn-warning");
    }
  }

  function buttonsColorReset() {
    for (let i = 0; i < all_buttons.length; i++) {
      all_buttons[i].classList.remove(all_buttons[i].classList[1]);
      all_buttons[i].classList.add(copyAllButtons[i]);
    }
  }

  function randomColors() {
    let magic = [
      "btn-primary",
      "btn-success",
      "btn-danger",
      "btn-warning",
      "btn-secondary",
    ];
    for (let i = 0; i < all_buttons.length; i++) {
      let randomNumber = Math.floor(Math.random() * 5);
      all_buttons[i].classList.remove(all_buttons[i].classList[1]);
      all_buttons[i].classList.add(magic[randomNumber]);
    }
  }
}

//************CHALLENGE 5 **************

let blackjackGame = {
  you: { scorespan: "#your-blackjack-result", div: "#your-box", score: 0 },

  dealer: {
    scorespan: "#dealer-blackjack-result",
    div: "#dealer-box",
    score: 0,
  },

  cards: ["2", "3", "4", "5", "6", "7", "8", "9", "10", "K", "Q", "J", "A"],

  cardsMap: {
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10,
    K: 10,
    Q: 10,
    J: 10,
    A: [1, 11],
  },
  wins: 0,
  losses: 0,
  draws: 0,
  'isStand': false,
  'turnsOver': false,
};

const YOU = blackjackGame["you"];
const DEALER = blackjackGame["dealer"];

document
  .querySelector("#blackjack-hit-button")
  .addEventListener("click", blackjackHit);

document
  .querySelector("#blackjack-stand-button")
  .addEventListener("click", dealerLogic);

document
  .querySelector("#blackjack-deal-button")
  .addEventListener("click", blackjackDeal);

const hitSound = new Audio("blackjack_assets/sounds/swish.m4a");
const winSound = new Audio("blackjack_assets/sounds/cash.mp3");
const loseSound = new Audio("blackjack_assets/sounds/aww.mp3");

function blackjackHit() {
  if(blackjackGame['isStand'] === false){
    let card = randomCards();
    console.log(card);
    showCard(card, YOU);
    updateScore(card, YOU);
    showScore(YOU);
  }
  
}

function showCard(card, activePlayer) {
  if (activePlayer["score"] <= 21) {
    let cardImage = document.createElement("img");
    cardImage.src = `blackjack_assets/images/${card}.png`;
    document.querySelector(activePlayer["div"]).appendChild(cardImage);
    hitSound.play();
  }
}

//Deal Button
function blackjackDeal() {
 /*  let winner = computeWinner();
    showResult(winner); */
if(blackjackGame['turnsOver'] === true) {
  blackjackGame['isStand']= false;
    document.querySelector('#blackjack-result').textContent = "Let's Play";
    document.querySelector('#blackjack-result').style.color = "black";
  let yourImages = document.querySelector("#your-box").querySelectorAll("img");

  for (i = 0; i < yourImages.length; i++) {
    yourImages[i].remove();
  }

  let dealerImages = document
    .querySelector("#dealer-box")
    .querySelectorAll("img");

  for (i = 0; i < dealerImages.length; i++) {
    dealerImages[i].remove();
  }
  YOU["score"] = 0;
  DEALER["score"] = 0;
  document.querySelector("#your-blackjack-result").textContent = 0;
  document.querySelector("#dealer-blackjack-result").textContent = 0;

  document.querySelector("#your-blackjack-result").style.color = "#ffffff";
  document.querySelector("#dealer-blackjack-result").style.color = "#ffffff";
blackjackGame['turnsOver'] = true;
}
}

//RAndom cars
function randomCards() {
  let randomIndex = Math.floor(Math.random() * 13);
  return blackjackGame["cards"][randomIndex];
}

function updateScore(card, activePlayer) {
  if (card === "A") {
    if (activePlayer["score"] + blackjackGame["cardsMap"][card][1] <= 21) {
      activePlayer["score"] += blackjackGame["cardsMap"][card][1];
    } else {
      activePlayer["score"] += blackjackGame["cardsMap"][card][0];
    }
  } else {
    activePlayer["score"] += blackjackGame["cardsMap"][card];
  }
}

function showScore(activePlayer) {
  if (activePlayer["score"] > 21) {
    document.querySelector(activePlayer["scorespan"]).textContent = "BUST";
    document.querySelector(activePlayer["scorespan"]).style.color = "red";
  } else {
    document.querySelector(activePlayer["scorespan"]).textContent =
      activePlayer["score"];
  }
}


function sleep(ms){
  return new Promise(resolve => setTimeout(resolve, ms));
}



// bot player
async function dealerLogic() {
  blackjackGame['isStand'] = true;
  while ( DEALER['score'] < 16 && blackjackGame['isStand'] === true){

  
    let card = randomCards();
    showCard(card, DEALER);
    updateScore(card, DEALER);
    showScore(DEALER);
    await sleep(1000);
  }
  
    blackjackGame['turnsOver'] = true;
    let winner = computeWinner();
    showResult(winner);
  
}

// Compute winnder and return who just won
function computeWinner() {
  let winner;
  if (YOU["score"] <= 21) {
    if (YOU["score"] > DEALER["score"] || DEALER["score"] > 21) {
      blackjackGame["wins"]++;
      winner = YOU;
    } else if (YOU["score"] < DEALER["score"]) {
      blackjackGame["losses"]++;
      winner = DEALER;
    } else if (YOU["score"] === DEALER["score"]) {
      blackjackGame["draws"]++;
    }
  } else if (YOU["score"] > 21 && DEALER["score"] <= 21) {
    blackjackGame["losses"]++;
    winner = DEALER;
  } else if (YOU["score"] > 21 && DEALER["score"] > 21) {
    blackjackGame["draws"]++;
  }
  
  return winner;
}

function showResult(winner) {
  let message, messageColor;

  if(blackjackGame['turnsOver']=== true){



  if (winner === YOU) {
    document.querySelector('#wins').textContent = blackjackGame['wins'];
    message = "You Won!";
    messageColor = "green";
    winSound.play();
  } else if (winner === DEALER) {
    document.querySelector('#losses').textContent = blackjackGame['losses'];
    message = "You Lost!";
    messageColor = "red";
    loseSound.play();
  } else {
    document.querySelector('#draws').textContent = blackjackGame['draws'];
    message = "You draw";
    messageColor = "black";
  }
  document.querySelector("#blackjack-result").textContent = message;
  document.querySelector("#blackjack-result").style.color = messageColor;
}
}
