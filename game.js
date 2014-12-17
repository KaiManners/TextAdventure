
//inventory doesn't need a "function", just a display. pickup and drop should only 
//document.createElement()
//document.createTextNode()
//document.querySelector
//help me

function interpret(string){
	var stuff = {}
	var FirstStep = string.trim();
	var SecondStep = FirstStep.split(" ");
	var ThirdStep = SecondStep.shift();
	stuff.action = ThirdStep;
	var FourthStep = SecondStep.join();
	stuff.object = FourthStep;
	return stuff;
}

function execute (command) {
	var action = command.action;
	var target = command.target;
	player[action](target);
}

function report (result){
	for (i in newPlayer.items){
		var content = document.querySelectorAll("#inventory > ul");
		return content; 
	}
}

function gameIntro(){
	var inputBox = document.querySelector("input");
	var listener = function(event) { 
		if (event.keyCode == 13){
			event.target.removeEventListener("keyup", listener);
			customizePlayer(this.value);
			gameStart();
		}
	}
	inputBox.addEventListener("keyup", listener);
};

function gameStep (input){
	var cmd = interpret(input);
	var result = execute(cmd);
	report(result);
}
function gameStart(){
	var inputBox = document.querySelector("input");
	inputBox.addEventListener("keyup", gameStep);
		if (event.keyCode === 13){
			gameStep();
		}
}

window.onload = gameStart;
