var newPlayer = {
	name: name,
	items: [],
};

newPlayer.pickUp = function(item){
	this.items.push(item)
};
newPlayer.drop = function(name){
	var pos = this.items.indexOf(name)
	if (pos >= 0){
		this.items.splice(pos, 1);
	}
}

function interpret(string){
	var stuff = {
		action : action,
		target : object
	}
	var newString = ""
	var FirstStep = string.trim();
	var SecondStep = FirstStep.split(" ");
	var ThirdStep = SecondStep.shift();
	stuff.action = ThirdStep;
	var FourthStep = ThirdStep.join();
	stuff.object = FourthStep;
}

function execute (command) {
	var action = command.action;
	var target = command.target;
	var func = player[action];
	var func(target);
}

function report (result){
	for (i in newPlayer.items){
		var content = document.querySelectorAll("#inventory > ul");
		return content; 
	}
}

function gameStep (){
	var input = this.value;
	var cmd = interpret(input);
	...
}
var gameStart = function(){
	var inputBox = document.querySelector("input");
	inputBox.addEventListener("keyup", gameStep);
		if (event.keyCode === 13){
			gameStep();
		}
}

window.onload = gameStart;
