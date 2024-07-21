const messageClass = require('./message');
const commandClass = require('./command');

class Rover {
   // Write code here!
   constructor(position) {
      this.position = position;
      this.mode = 'NORMAL';
      this.generatorWatts = 110;
   }
       recieveMessage(message) {
      let messageObject = {};
      let messageName = message.name;
      return messageObject.message = messageName;
      }
         
      
      
}



module.exports = Rover;