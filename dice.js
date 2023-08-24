var randomnumber1=Math.floor(Math.random()*6)+1;
var randomdice ="dice"+randomnumber1 + ".png";
var imgsrc ="images/" +randomdice;
var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src" ,imgsrc);

var randomnumber2 =Math.floor(Math.random()*6) +1;
var imgsrc2 = "images/dice" + randomnumber2 +".png";
document.querySelectorAll("img")[1].setAttribute("src",imgsrc2);

if(randomnumber1 > randomnumber2){
    document.querySelector("h1").innerHTML ="Player 1 Wins!"
}

else if(randomnumber1 < randomnumber2){
    document.querySelector("h1").innerHTML ="Player 2 Wins!"
}

else{
    document.querySelector("h1").innerHTML ="DRAW!!!!"
}