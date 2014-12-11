function Location(name, description){
	this.name = name; 
	this.description = description; 
	this.items = [];
}


var locations = [];
locations.push(bar, room, nightClub);

var connections = [
[1,0,0,0,0,0,0,0],
[0,1,0,0,0,0,0,0],
[0,0,1,0,0,0,0,0],
[0,0,0,1,0,0,0,0],
[0,0,0,0,1,0,0,0],
[0,0,0,0,0,1,0,0],
[0,0,0,0,0,0,1,0],
[0,0,0,0,0,0,0,1],
];

/*function connect(matrix, i, j){
	matrix[i][j] = 1; 
	matrix[j][i] = 1;
}

function disconnect(matrix, i, j){
	matrix[i][j] = 0;
	matrix[j][i] = 0;
}

function connectohttps://github.com/KaiManners/TextAdventure.gitrCounter(matrix, i){
	while (i <= 7){
		connect(connections, i, i+1)
		i = i+1;
	}
};


connectorCounter(connections, 0);

*/
 
var map = {
	locations : locations,
	connections : connections,
	connect: function(from, to){
		var i = this.locations.indexOf(from);
		var j = this.locations.indexOf(to);
		this.connections[i][j] = 1;
		this.connections[j][i] = 1;
	}
}

function locater(){
    var row = connections[1];
    for (i in row){
	var value = row[i];
	if (value == 1){
	  console.log(locations[i].name);
    }
  }
}

player.goto = function(locName){
    var newLoc =locName.getLocNumber();
    for(i in map.locations){
        if(locName == map.locations[i].name){ 
            if(newLoc == currLoc.getLocNum();){
                currLoc = newLoc;
            }else{
                console.log("You can't go there.");
            }
        }else{
            //print only it has gone through everything
		console.log("Location doesn't exist.");
        }
     }
}
			
map.getLocNumber = function(locName){
	var locNum = -1;
	for(i in this.locations){
		if(locName === this.locations[i].name){
			locNum = 1;
			break;
		}
	}
	return locNum;
}

map.locations = [
	//the unexpected quality of death
	new Location("Doctor's Office", "Ivan had just received the news that he has an incurable disease. He fell down a stepladder and hurt his side and now he's destined to die. You follow Ivan and listen."),
	//introduction
	new Location("Unknown", "You awake to nothingness. You cannot see your own body but your consciousness is still able to observe."),
	//the implications of war
	new Location("Battlefield", "Snake peers outside of his cover: a cardboard box. Two enemy soldiers converse briskly and then part ways. Snake follows one of them to neutralize him."),
	//the purpose of drinking
	new Location("Paddy's Pub", "The room is dark and tinges with a musky scent. The wood surrounding the actual bar appears to be rotting. You sit down and listen to the bartender."),
	//how to mourn
	new Location("Rosa's Room", "Rosa lies on her bed. Her face is pressed against a pillow while she silently listens to the voicemail of loved one who had recently passed. Like many others, she cannot see or hear you, so you quietly observe."),
	//paid company
	new Location("Nightclub", "John has hired an escort for the night. He normally doesn't do that sort of thing and he wonders why he's even doing it. The woman prepares herself in the restroom while John waits anxiously."),
	//living with a mark 
	new Location("Mark's House", "Mark has lived by himself for a long time. He's had a physical disability and because of this, he doesn't have much company. He's embarrased by his ailments and feels like he'd impose on others if he were to meet people. You read through his journal."),
	//things aren't too bad
	new Location("Cafe", "Kim considers herself some sort of pessimist. How can one find any joy in a world where people starve, die alone, and live in pain? John finds her persistent cynicism irritating and even juvenille. While he doesn't entirely disagree with her, in spite of all this, he can't believe this. He continues to speak."),



]

locater();
