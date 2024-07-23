const Message = require('./message');
const Command = require('./command'); 


let commands = [
   new Command('MOVE', 4321),
   new Command('STATUS_CHECK'),
   new Command('MODE_CHANGE', 'LOW_POWER'),
   new Command('MOVE', 3579),
   new Command('STATUS_CHECK')
];
let message = new Message('TA power', commands);

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
            let statusCheckObject = {
               completed: true,
               roverStatus : {mode:this.mode, generatorWatts:this.generatorWatts, position:this.position
               }
               };
               results.push(statusCheckObject);
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

let rover = new Rover(100);
let response = rover.receiveMessage(message);
console.dir(response, { depth: null });

// console.log(responseexpect(response.message).toEqual('TA power');
// expect(response.results[0].completed).toBeTruthy();
// expect(response.results[1].roverStatus.position).toEqual(4321);
// expect(response.results[2].completed).toBeTruthy();
// expect(response.results[3].completed).toBeFalsy();
// expect(response.results[4].roverStatus.position).toEqual(4321);
// expect(response.results[4].roverStatus.mode).toEqual('LOW_POWER');
// expect(response.results[4].roverStatus.generatorWatts).toEqual(110););
module.exports = Rover;

