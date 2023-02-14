//For Player 1
document.querySelector("h1").innerHTML = "Refresh Me!";
var randomNumber1 = Math.floor((Math.random() * 6)+1);
var randomDiceImg = "dice"+ randomNumber1 + ".png";
var randomImgSource = "images/"+ randomDiceImg;
var image_1 = document.querySelectorAll("img")[0];
image_1.setAttribute("src",randomImgSource);

//For Player 2

var randomNumber2 = Math.floor((Math.random() * 6)+1);
var randomDiceImg = "dice"+ randomNumber2 + ".png";
var randomImgSource = "images/"+ randomDiceImg;
var image_2 = document.querySelectorAll("img")[1];
image_2.setAttribute("src",randomImgSource);

// condition for winning player
if(randomNumber1 === randomNumber2){
    document.querySelector("h1").innerHTML = "Draw";
}
else if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins !";
} else {
    document.querySelector("h1").innerHTML = "Player 2 Wins !";
}
