var randomNumber1 = Math.random();
randomNumber1 = randomNumber1 * 6;
randomNumber1 = Math.floor(randomNumber1) + 1;

var randomNumber2 = Math.random();
randomNumber2 = randomNumber2 * 6;
randomNumber2 = Math.floor(randomNumber2) + 1;

function firstDie(numb1) {
  var firstImage = document.querySelector("img.img1");
  if (randomNumber1 === 1) {
    firstImage.setAttribute("src", "./images/dice1.png");
  } else if (randomNumber1 === 2) {
    firstImage.setAttribute("src", "./images/dice2.png");
  } else if (randomNumber1 === 3) {
    firstImage.setAttribute("src", "./images/dice3.png");
  } else if (randomNumber1 === 4) {
    firstImage.setAttribute("src", "./images/dice4.png");
  } else if (randomNumber1 === 5) {
    firstImage.setAttribute("src", "./images/dice5.png");
  } else if (randomNumber1 === 6) {
    firstImage.setAttribute("src", "./images/dice6.png");
  }
}

function secondDie(numb2) {
  var secondImage = document.querySelector("img.img2");
  if (randomNumber2 === 1) {
    secondImage.setAttribute("src", "./images/dice1.png");
  } else if (randomNumber2 === 2) {
    secondImage.setAttribute("src", "./images/dice2.png");
  } else if (randomNumber2 === 3) {
    secondImage.setAttribute("src", "./images/dice3.png");
  } else if (randomNumber2 === 4) {
    secondImage.setAttribute("src", "./images/dice4.png");
  } else if (randomNumber2 === 5) {
    secondImage.setAttribute("src", "./images/dice5.png");
  } else if (randomNumber2 === 6) {
    secondImage.setAttribute("src", "./images/dice6.png");
  }
}

firstDie(randomNumber1);
secondDie(randomNumber2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 wins!";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 wins!";
} else if (randomNumber1 === randomNumber2) {
  document.querySelector("h1").innerHTML = "Tie game!";
} else {
  document.querySelector("h1").innerHTML =
    "You've broken the Matrix. Deploy the Agents!";
}
