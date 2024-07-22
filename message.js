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
let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
let message = new Message('Test message with two commands', commands);



// let command1 = message.commands[0].commandType;
// console.log(command1);

module.exports = Message;

