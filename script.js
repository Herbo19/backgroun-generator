var css = document.querySelector("h3");
var cssInitial = document.querySelector("h4");
var color1 = document.querySelector(".color1");
var color2= document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector(".random");
// var color3 = document.querySelector(".color3");
// var color4 = document.querySelector(".color4");


body.style.background = "linear-gradient(to right, " + 
	color1.value + ", "  + color2.value +  ")";

	cssInitial.textContent = body.style.background + ";";

function setGradient(){
	body.style.background = "linear-gradient(to right, " + 
	color1.value + ", "  + color2.value +  ")";

	css.textContent = body.style.background + ";";
}

function changeBackground(){
  body.style.background = `linear-gradient(to right,${getRandomHEXColor()},${getRandomHEXColor()})`;
}

function getRandomHEXColor() {
  const SEED = '0123456789abcdef';
  let output = '#';
  while (output.length < 7) {
    output += SEED[Math.floor(Math.random() * SEED.length)];
  }
  return output;
}

color1.addEventListener("input",setGradient);

color2.addEventListener("input",setGradient);

button.addEventListener("click", changeBackground);