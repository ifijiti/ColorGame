// alert("project has beeb started")
var colors = generateRandomColor(6);

var squares = document.querySelectorAll(".square");
var displayColor = document.querySelector("#displayColor");
var textMessage = document.querySelector("#message")
var pickedColor = pickColor();
var h1 = document.querySelector("h1")
var resetButton = document.querySelector("#reset")
var easyBtn = document.querySelector("#easy")
var hardBtn = document.querySelector("#hard")

easyBtn.addEventListener("click", function(){
	easyBtn.classList.add("selected")
	hardBtn.classList.remove("selected")
	colors = generateRandomColor(3);
	pickedColor = pickColor();
	displayColor.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
	squares[i].style.background = colors[i];
} else{
	squares[i].style.display = "none"
}
	//change h1 color to body color
	h1.style.background = "#232323";
}
})

hardBtn.addEventListener("click", function(){
	hardBtn.classList.add("selected")
	easyBtn.classList.remove("selected")
	colors = generateRandomColor(6);
	pickedColor = pickColor();
	displayColor.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.display = "block"
		squares[i].style.background = colors[i]
	}
})




displayColor.textContent = pickedColor;

resetButton.addEventListener("click", function(){
	//generate al new colors
	colors = generateRandomColor(6);
	//pick a new color from array
	pickedColor = pickColor();
	//change displayColor to picked Color
	displayColor.textContent = pickedColor;
	//change color in squares
	for (var i = 0; i < squares.length; i++) {
	squares[i].style.background = colors[i];
	//change h1 color to body color
	h1.style.background = "#232323";
}
})

for (var i = 0; i < squares.length; i++) {
	squares[i].style.background = colors[i];

squares[i].addEventListener("click", function(){
	var clickedColor = this.style.background;
if (clickedColor === pickedColor) {
	console.log("correct")
	message.textContent = "CORRECT";
	changeColor(clickedColor);
	h1.style.background = pickedColor;
}else{
	console.log("wrong")
	this.style.background = "#232323"
	message.textContent = "TRY AGAIN!"
	resetButton.textContent = "PLAY AGAIN?"
}
})
}

function changeColor(color){
	for (var i = 0; i < squares.length; i++) {
	squares[i].style.background = color;
}
};

function pickColor(){
	var random = Math.floor(Math.random() * colors.length)
	return colors[random];
}

function generateRandomColor(num){
// 	//create array
	var arr = [];
// 	//add random number to array
for (var i = 0; i < num; i++) {
	arr.push(randomColor());	
}
return arr;
}

function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b +")"
};