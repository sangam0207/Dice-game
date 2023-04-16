 const san=document.getElementById("san1");

san.addEventListener("click",()=>{
    var randomnum1=Math.floor(Math.random()*6)+1;
var randomimg="./images/"+randomnum1+".png";
var img1=document.querySelectorAll("img")[0];
img1.setAttribute( 'src',randomimg);
var randomnum2=Math.floor(Math.random()*6)+1;
var randomimg="./images/"+randomnum2+".png";
var img2=document.querySelectorAll("img")[1];
img2.setAttribute( 'src',randomimg);
var a=document.getElementById("result");
if (randomnum1>randomnum2){
a.innerHTML="'Player 1 won the match'";
}
else if(randomnum1==randomnum2){
    a.innerHTML="match is draw"; 
}
else{
    a.innerHTML="'Player 2 won the match'"; 
}
})