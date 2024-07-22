const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.


describe("Rover class", function() {

  // 7 tests here!



it ("constructor sets position and default values for mode and generatorWatts.", function(){ // 7
    let roverObject = new Rover(12345);

    expect(roverObject.position).toBe(12345);
    expect(roverObject.mode).toEqual('NORMAL');
    expect(roverObject.generatorWatts).toEqual(110);
});

it ("response returned by receiveMessage contains the name of the message", function() { // 8
    let roverObject = new Rover(12345);
    let messageObject = new Message("NAME", [command, command]);

    expect(roverObject.recieveMessage(messageObject)).toEqual("NAME");
});

it ("response returned by receiveMessage includes two results if two commands are sent in the message", function() { // 9
    let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
let message = new Message('Test message with two commands', commands);
let rover = new Rover(98382);    // Passes 98382 as the rover's position.
let response = rover.receiveMessage(message);

for (let i = 0; i < 2; i++) {
    if ()
}

});






});
