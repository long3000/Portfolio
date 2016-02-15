var colorID = $(".colorID");
var squares = $(".square");
//Declare timing for color changing
timer();
onPageLoad();
//Generate random hex code
function randomColor() {
	var color = Math.floor(Math.random()*16777215).toString(16);
	return ("#"+color);
}
//Place colors in array 
function colorArray(num) {
	var arr= [];
	for(var i = 0; i<num; i++) {
		arr.push(randomColor());
	}
	return arr;
}
//Pull colors out and fill in squares with text
function onPageLoad(){
	var colors = colorArray(3);
	console.log(colors);
	for(var i=0; i<squares.length; i++){
		squares[i].style.background = colors[i];
		colorID[i].textContent = colors[i];
	}
}
function timer(){
	setInterval(onPageLoad,2000);
}