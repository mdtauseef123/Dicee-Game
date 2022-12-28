var randomNumber1=Math.ceil(Math.random() * 6);
var randomNumber2=Math.ceil(Math.random() * 6);
var image1 = "dice"+randomNumber1+".png";
var image2 = "dice"+randomNumber2+".png";
document.getElementsByClassName("img1")[0].setAttribute("src","images/"+image1);
document.getElementsByClassName("img2")[0].setAttribute("src","images/"+image2);
if(randomNumber1 === randomNumber2){
    document.querySelector("h1").innerHTML="Draw!";
}
else if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 Wins!";
}
else{
    document.querySelector("h1").innerHTML="Player 2 Wins!";
}