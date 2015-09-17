var selected;
var content;
var winningComb;
var turn=0;
var myCanvas;
var canv;
var canvContext;
var squaresFilled=0;
var y;
//Start the game
window.onload=function() {
	selected = new Array();
	content = new Array();
	winningComb = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
	for (var i=0;i<=8;i++) {
		selected[i] = false;
		content[i] ='';
	}
}
//Methods for the game
function canvasClicked(num) {
	myCanvas = "canvas" + num;
	canv=document.getElementById(myCanvas);
	canvContext = canv.getContext("2d");

	if (selected[num-1]==false) {
		if (turn%2==0) {
			canvContext.beginPath();
			canvContext.moveTo(10,10);
			canvContext.lineTo(260,135);
			canvContext.moveTo(260,10);
			canvContext.lineTo(10,135);
			canvContext.strokeStyle="red";
			canvContext.lineWidth = 5;
			canvContext.stroke();
			canvContext.closePath();
			content[num-1]='X';
			turn++;
			selected[num-1]=true;
			squaresFilled++;
			checkForWin(content[num-1]);

			if(squaresFilled==9) {
				alert("BRO GAME OVER NO ONE WON BRO");
				location.reload(true);
			}
		}

		else {
			canvContext.beginPath();
			canvContext.arc(150,75,70,0,Math.PI*2);
			canvContext.strokeStyle="blue";
			canvContext.lineWidth=5;
			canvContext.stroke();
			canvContext.closePath();
			content[num-1]='O';
			turn++;
			selected[num-1]=true;
			squaresFilled++;
			checkForWin(content[num-1]);

			if(squaresFilled==9) {
				alert("GAME OVER");
				location.reload(true);
			}
		}
	}
	else{
		alert("BRO THAT SPACE IS ALREADY OCCUPIED BRO");
	}
}

function checkForWin(symb) {
	for (var j = 0;j<winningComb.length;j++) {
		if(content[winningComb[j][0]]==symb && content[winningComb[j][1]]==symb && content[winningComb[j][2]]==symb) {
			alert("BRO, "+symb+" WON!");
			playAgain();
		}
	}
}

function playAgain() {
	y=confirm("BRO DO YOU WANT TO PLAY AGAIN BRO?");
	if(y==true) {
		alert("AIGHT BRO");
		location.reload(true);
	}
	else {
		alert("PEACE OUT BRO");
	}
}