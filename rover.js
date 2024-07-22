const Message = require('./message');

const Command = require('./command');


let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
let message = new Message('Test message with two commands', commands);


class Rover {
   // Write code here!
   constructor(position) {
      this.position = position;
      this.mode = 'NORMAL';
      this.generatorWatts = 110;
   }
       receiveMessage(message) {
      
      let receiveMessageObject = {
      };
  

      let results = {};
    

       for (let i = 0; i < message.commands.length; i++) { // for loop to iterate through message commands to obtain commandType and value from Command class object.
       if (message.commands[i].commandType == 'MODE_CHANGE' && message.commands[i].value == 'LOW_POWER') { 
        this.mode = 'LOW POWER';
        results.completed = true;
       }

       if (message.commands[i].commandType == 'MODE_CHANGE' && message.commands[i].value == 'NORMAL') {
        this.mode = "NORMAL";
        results.completed = true;
       }

       if (message.commands[i].commandType == 'STATUS_CHECK') {
        results.completed = true;
        results.mode = this.mode;
        results.generatorWatts = this.generatorWatts;
        results.positon = this.position;
       }

       if (message.commands[i].commandType == 'MOVE' && this.mode =='NORMAL') {
        this.position = message.commands[i].value;
        results.completed = true;
       }
       if (message.commands[i].commandType == 'MOVE' && this.mode =='LOW POWER') {
        results.completed = false;
       }

      
}
return receiveMessageObject = {
    message : message.name,
    results
    };
}

}

let rover = new Rover(98382);    // Passes 98382 as the rover's position.
let response = rover.receiveMessage(message);

console.log(response);

module.exports = Rover;