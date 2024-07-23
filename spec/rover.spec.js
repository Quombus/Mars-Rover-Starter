const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edtest the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.


describe("Rover class", function() {

  // 7 tests here!


 // 7
test ("constructor sets position and default values for mode and generatorWatts.", function(){
    let roverObject = new Rover(12345);

    expect(roverObject.position).toBe(12345);
    expect(roverObject.mode).toEqual('NORMAL');
    expect(roverObject.generatorWatts).toEqual(110);
});

// 8
test  ("response returned by receiveMessage contains the name of the message", function() { 
    let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
    let message = new Message('NAME', commands);
    let rover = new Rover(98382);    // Passes 98382 as the rover's position.
    let response = rover.receiveMessage(message);

    expect(response.message).toEqual("NAME");
});

// 9
test  ("response returned by receiveMessage includes two results if two commands are sent in the message", function() { 
    let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
let message = new Message('Test message with two commands', commands);
let rover = new Rover(98382);    // Passes 98382 as the rover's position.
let response = rover.receiveMessage(message);
let count = 0;
for (key in response) {
    count += 1;
 }
expect (count).toEqual(2);
});

// 10
test("responds correctly to the status check command", function () {
let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
let message = new Message('Test message with two commands', commands);
let rover = new Rover(98382);    // Passes 98382 as the rover's position.
let response = rover.receiveMessage(message);

expect (response.results).toEqual([
    { completed: true },
    { completed: true },
    { mode: 'LOW_POWER', generatorWatts: 110, position: 98382 }
  ]);
});

// 11
test ("responds correctly to the mode change command", function () {
    let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
let message = new Message('Test message with two commands', commands);
let rover = new Rover(98382);   
let response = rover.receiveMessage(message); // Passes 98382 as the rover's position.

expect (rover.mode).toEqual("LOW_POWER");
});

// 12
test ("responds with a false completed value when attempting to move in LOW_POWER mode", function () {
    let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('MOVE', 3231)];
let message = new Message('Test message with two commands', commands);
let rover = new Rover(98382);    // Passes 98382 as the rover's position.
rover.mode = 'LOw_POWER'
let response = rover.receiveMessage(message);

expect (response.results[1]).toEqual({completed : false});
});

// 13
test("responds with the position for the move command", function () {
    let commands = [new Command('MOVE', 3231)];
    let message = new Message('Test message with two commands', commands);
    let rover = new Rover(98382); 
    let response = rover.receiveMessage(message);

    expect (rover.position).toEqual(3231);
});
});
