var first_dice = "images/dice" + (Math.floor(Math.random() * 6) + 1) + ".png";
var set_first_dice = document.querySelectorAll("img")[0].setAttribute("src", first_dice);
var second_dice = "images/dice" + (Math.floor(Math.random() * 6) + 1) + ".png";
var set_second_dice = document.querySelectorAll("img")[1].setAttribute("src", second_dice);

if (first_dice > second_dice) {
    document.querySelector("h1").innerHTML = ("🚩Play 1 Wins!");

}
else if (first_dice < second_dice) {
    document.querySelector("h1").innerHTML = ("Play 2 Wins! 🚩")

}
else {
    document.querySelector("h1").innerHTML = ("Draw!");
}