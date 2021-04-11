var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomImage1 = "images/dice"+randomNumber1+".png"
var randomImage2 = "images/dice"+randomNumber2+".png"
var img1 = document.querySelectorAll("img")[0];
var img2 = document.querySelectorAll("img")[1];
img1.setAttribute("src",randomImage1);
img2.setAttribute("src",randomImage2);

if (randomNumber1>randomNumber2){
   document.querySelectorAll("p")[2].innerText="player1 wins";
}
else if (randomNumber2>randomNumber1){
  document.querySelectorAll("p")[2].innerText="player2 wins";
}
else{
  document.querySelectorAll("p")[2].innerText="draw";
}
// document.querySelector(".img1").setAttribute("src","images/dice2.png");
// var imgArray = new Array();
//
// imgArray[0] = new Image();
// imgArray[0].src = 'images/dice1.png';
//
// imgArray[1] = new Image();
// imgArray[1].src = 'images/dice2.png';
//
// imgArray[2] = new Image();
// imgArray[2].src = 'images/dice3.png';
//
// imgArray[3] = new Image();
// imgArray[3].src = 'images/dice4.png';
//
// imgArray[4] = new Image();
// imgArray[4].src = 'images/dice5.png';
//
// imgArray[5] = new Image();
// imgArray[5].src = 'images/dice6.png';
// function images(image){
//   var n = Math.floor(Math.random()*imgArray.length);
//   return "imgArray[2]" ;
// }
// images(imgArray);
// var n = imgArray[n];
