var num1=Math.floor(Math.random()*6)+1;
imgPath="./dice"+num1+".png";
document.querySelectorAll("img")[0].setAttribute("src",imgPath);



var num2=Math.floor(Math.random()*6)+1;
imgPath="./dice"+num2+".png";
document.querySelectorAll("img")[1].setAttribute("src",imgPath);


if(num1>num2){
    document.querySelector("h2").innerText="🚩 Player 1 Won";
}else if(num2>num1){
    document.querySelector("h2").innerText="Player 2 Won 🚩";
}else{
    document.querySelector("h2").innerText="🏁 Match Draw 🏁";
}

    

