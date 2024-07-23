const Command = require('./command');

class Message {
   constructor(name, commands) {
      this.name = name;
      if (!name) {
         throw Error("Name required.");
       }
      this.commands = commands;
   }
}

// let array = [];
// let object1 = {};
// let object2 = {};
// let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
// let message = new Message('Test message with two commands', commands);



// let command1 = message.commands[0].commandType;
// let value1 = message.commands[0].value;

// object1.completed = command1;
// object2.roverStatus = value1;
// array.push(object1);
// array.push(object2);

// console.log(array);
module.exports = Message;

