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
       let receiveMessageObject = {};
        let results = [];
        let roverStatus = {};

       for (let i = 0; i < message.commands.length; i++) { 
        if (message.commands[i].commandType == 'MODE_CHANGE' && message.commands[i].value == 'LOW_POWER') { 
            this.mode = 'LOW_POWER';
            let completedObject = {completed : true};
            results.push(completedObject);       
           }
           if (message.commands[i].commandType == 'MODE_CHANGE' && message.commands[i].value == 'NORMAL') {
            this.mode = "NORMAL";
            let completedObject = {completed : true};
            results.push(completedObject);   
           }
           if (message.commands[i].commandType == 'STATUS_CHECK') {
            let completedObject = {completed : true};
            results.push(completedObject);  
            roverStatus.mode = this.mode;
            roverStatus.generatorWatts = this.generatorWatts;
            roverStatus.position = this.position;
            results.push(roverStatus);
           //setup roverStatus key:value, with the value set to an object
           }
           if (message.commands[i].commandType == 'MOVE' && this.mode =='NORMAL') {
            this.position = message.commands[i].value;
            let completedObject = {completed : true};
            results.push(completedObject);  
                    }
           if (message.commands[i].commandType == 'MOVE' && this.mode =='LOW_POWER') {
            let completedObject = {completed : false};
            results.push(completedObject);  
           }
}
return receiveMessageObject = {
       message : message.name,
       results : results
};
}
}

let rover = new Rover(8888);    // Passes 98382 as the rover's position.
let response = rover.receiveMessage(message);


console.log(rover.mode);
module.exports = Rover;
