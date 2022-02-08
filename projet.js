const prompt = require("prompt");

let grid = [
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "]
];

let rover = {
    direction: "N",
    x: 0,
    y: 0,
}

function turnLeft(rover){
    if(direction === "N"){
        direction = "O";
    }else if (direction === "O"){
        direction = "S";
    }else if (direction === "S"){
        direction = "E";
    }else if (direction === "E"){
        direction = "N";
    }else{
        console.error()
    }
}
function turnRight(rover){
    if(direction === "N"){
        direction = "E";
    }else if (direction === "E"){
        direction = "S";
    }else if (direction === "S"){
        direction = "O";
    }else if (direction === "O"){
        direction = "N";
    }else{
        console.error()
    }
}

