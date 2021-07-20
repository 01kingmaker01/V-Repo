alert("Please Avoid!!! Mobile-Site. USE DESKTOP-SITE for BETTER EXPERIENCE ");
var colors,
  pickedColor,
  numSquares = 6,
  square = document.getElementsByClassName("square"),
  colorDisplay = document.querySelector("#colorDisplay"),
  message = document.querySelector("h4 span"),
  h1 = document.querySelector("h1"),
  reset = document.querySelector("#reset"),
  modeBtn = document.querySelectorAll(".mode");
function randomColor() {
  return (
    "rgb(" +
    Math.floor(256 * Math.random()) +
    ", " +
    Math.floor(256 * Math.random()) +
    ", " +
    Math.floor(256 * Math.random()) +
    ")"
  );
}
function generateRandomColor(e) {
  var o = [];
  for (let t = 0; t < e; t++) o.push(randomColor());
  return o;
}
function pickColor() {
  var e = Math.floor(Math.random() * colors.length);
  return colors[e];
}
function colorChange(e) {
  for (let o = 0; o < colors.length; o++) square[o].style.background = e;
}
colors = generateRandomColor(numSquares);
console.log(colors);
pickedColor = pickColor();
colorDisplay.textContent = pickedColor;
for (let e = 0; e < colors.length; e++) {
  square[e].style.background = colors[e];
  square[e].addEventListener("click", () => {
    var e = this.style.background;
    console.log(pickedColor, e);
    return pickedColor === e
      ? ((message.textContent = " CORRECT!!! "),
        colorChange(pickedColor),
        (h1.style.background = pickedColor),
        (reset.textContent = "RESET"))
      : ((this.style.background = "#232323"),
        (message.textContent = "Try Again "));
  });
}
function resetFun() {
  colors = generateRandomColor(numSquares);
  for (let e = 0; e < square.length; e++)
    colors[e]
      ? (square[e].style.display = "block"(
          (square[e].style.background = colors[e])
        ))
      : (square[e].style.display = "none");
  for (let e = 0; e < colors.length; e++)
    square[e].style.background = colors[e];
  pickedColor = pickColor();
  h1.style.background = "skyblue";
  colorDisplay.textContent = pickedColor;
  reset.textContent = "New Colors";
  message.textContent = " Good Luck ";
}
reset.addEventListener("click", function () {
  resetFun();
});
for (var i = 0; i < modeBtn.length; i++)
  modeBtn[i].addEventListener("click", function () {
    modeBtn[0].classList.remove("selected");
    modeBtn[1].classList.remove("selected");
    this.classList.add("selected");
    numSquares = "EASY" === this.textContent ? 3 : 6;
    resetFun();
  });
