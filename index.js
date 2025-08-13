var randomNumber1=(Math.floor(Math.random()*6)+1);
var randomDiceImage="dice"+randomNumber1+".png";
var randomimageSource="image/"+randomDiceImage;

var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomimageSource);


var randomNumber2=(Math.floor(Math.random()*6)+1);
var randomimageSource2="image/dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomimageSource2);


if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="player1 wins";
}
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="player2 wins";
}else{
    document.querySelector("h1").innerHTML="draw";
}