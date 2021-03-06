const prompt = require("prompt");

let grid = [
          /*0*//*1*//*2*//*3*//*4*//*5*//*6*//*7*//*8*//*9*/
	/*0*/ [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	/*-1*/[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	/*-2*/[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	/*-3*/[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	/*-4*/[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	/*-5*/[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	/*-6*/[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	/*-7*/[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	/*-8*/[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    /*-9*/[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "]
];

let rover = {
    direction: "N",
    x: 0,
    y: 0,
    travelLog: []
}

function turnLeft() {
    // console.log("before if -->", rover)
    if (rover.direction === "N") {
        rover.direction = "W";
    } else if (rover.direction === "W") {
        rover.direction = "S";
    } else if (rover.direction === "S") {
        rover.direction = "E";
    } else if (rover.direction === "E") {
        rover.direction = "N";
    } else {
        console.error("Error in the turnLeft")
    }
    // console.log(rover)
}
function turnRight() {
    if (rover.direction === "N") {
        rover.direction = "E";
    } else if (rover.direction === "E") {
        rover.direction = "S";
    } else if (rover.direction === "S") {
        rover.direction = "W";
    } else if (rover.direction === "W") {
        rover.direction = "N";
    } else {
        return console.error("Error in the turnRight");
    }
}

function moveForward() {
    if (rover.direction === "S") {
        if (rover.y - 1 > -10) {
            rover.y -= 1;
        } else {
            console.error('error: this is a wall');
        }
    } else if (rover.direction === "N") {
        if (rover.y + 1 < 1) {
            rover.y += 1;
        } else {
            console.error('error: this is a wall');
        }
    } else if (rover.direction === "E") {
        if (rover.x + 1 < 10) {
            rover.x += 1;
        } else {
            console.error('error: this is a wall');
        }
    } else if (rover.direction === "W") {
        if (rover.x - 1 > -1) {
            rover.x -= 1;
        } else {
            console.error('error: this is a wall');
        }
    } else {
        console.error("Error in the moveForward")
    }
}

function moveBackward() {
    if (rover.direction === "S") {
        if (rover.y + 1 < 1) {
            rover.y += 1;
        } else {
            console.error('error: this is a wall');
        }
    } else if (rover.direction === "N") {
        if (rover.y - 1 > -10) {
            rover.y -= 1;
        } else {
            console.error('error: this is a wall');
        }
    } else if (rover.direction === "E") {
        if (rover.x - 1 > -1) {
            rover.x -= 1;
        } else {
            console.error('error: this is a wall');
        }
    } else if (rover.direction === "W") {
        if (rover.x + 1 < 10) {
            rover.x += 1;
        } else {
            console.error('error: this is a wall');
        }
    }else {
        console.error("Error in the moveBackward")
    }
}

function pilotRover(guid) {
    for (i = 0; i < guid.length; i++) {
        // console.log(guid.charAt(i))
        if (guid.charAt(i) === "l") {
            turnLeft();
        }
        else if (guid.charAt(i) === "r") {
            turnRight();
        }
        else if (guid.charAt(i) === "f") {
            moveForward();
        }
        else if (guid.charAt(i) === "b") {
            moveBackward();
        }
        else {
            return console.error("Error in the pilotRover")
        }
        rover.travelLog.push(guid.charAt(i))
        console.log(rover)
      
        
    }

}

let yourDirection = {
    properties: {
        direction: {
            pattern: /^[rlfb]{1,}$/,
            message: 'we only need l or r or f or b without space',
            required: true
        },
    }
};

// console.log(grid[rover.y][rover.x])
prompt.get(yourDirection, function (err, result) {
    pilotRover(result.direction);
    rover.y = rover.y * -1;
    console.log(rover.y);
    grid[rover.y][rover.x] = rover.direction;
    console.table(grid);
})




// pilotRover("l")
// pilotRover("f")
// pilotRover("rflf")




