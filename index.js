var random = Math.random() * 6 + 1;
var randomNumber1 = Math.floor(random);
var image = "dice" + randomNumber1 + ".png"
var imagesource = image
var image1 = document.querySelectorAll("img")[0]
var image2 = document.querySelectorAll("img")[1]
image1.setAttribute("src", imagesource)
var randomImage2 = Math.floor(Math.random() *6+1)
var name1 = "dice" + randomImage2 + ".png"
var source2 = name1
image2.setAttribute("src", source2)

if (randomNumber1>randomImage2){
    document.querySelector("h1").textContent = "🏆player 1 wins!";
}else if (randomNumber1==randomImage2){
    document.querySelector("h1").textContent = "🛑Thats a draw!";
}else if (randomNumber1<randomImage2){
    document.querySelector("h1").textContent = "🏆player 2 wins!";
}
