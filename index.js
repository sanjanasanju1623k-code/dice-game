var randomNumber1= Math.floor((Math.random()*6))+1;
var randomImage1= ("dice"+randomNumber1+".png");
var randomSource1=("./"+randomImage1);
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomSource1);

var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomImage2= ("dice"+randomNumber2+".png");
var randomSource2 = ("./"+randomImage2);
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomSource2 );


if (randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="player 1 wins"
}
else if (randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="player 2 wins"
}
else if (randomNumber1===randomNumber2){
    document.querySelector("h1").innerHTML="draw"
}

