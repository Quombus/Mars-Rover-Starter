class Command {
   constructor(commandType, value) {
     this.commandType = commandType;
     if (!commandType) {
       throw Error("Command type required.");
     }
     this.value = value;
   }
 
 }

 let commands = [new Command('MODE_CHANGE', 'LOW_POWER')];

//  console.log(commands[0].commandType);
 module.exports = Command;