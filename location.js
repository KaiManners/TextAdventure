function Location(name, description){
	this.name = name; 
	this.description = description; 
	this.items = [];
}

var bar = new Location("McCurdy's Pub", "The room is dark and tinges with a musky scent. The wood surrounding the actual bar appears to be rotting. You sit down and listen to the bartender.");
var room = new Location("Rosa's Room", "Rosa lies on her bed. Her face is pressed against a pillow while she silently mourns the loss of a loved one. Like many others, she cannot see or hear you, so you quietly observe.");
var nightClub = new Location("Nightclub", "John has hired an escort for the night. He normally doesn't do that sort of thing and he wonders why he's even doing it. The woman prepares herself in the restroom while John waits anxiously.");

var locations = [];
locations.push(bar, room, nightClub);

var connections = [
[0,1,1],
[1,0,1],
[1,1,0],
];

var map = {
	locations : locations,
	connections : connections,
};

function locater(){
    var row = connections[1];
    for (i in row){
	var value = row[i];
	if (value == 1){
	  console.log(locations[i].name);
    }
  }
}

map.locations = [
	new Location("Doctor's Office", "Ivan had just received the news that he has an incurable disease. He fell down a stepladder and hurt his side and now he's destined to die. You follow Ivan and listen."),
]

locater();	
