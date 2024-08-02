const Message = require("./message");
const Command = require("./command");

class Rover {
  // Write code here!
  constructor(position) {
    this.position = position;
    this.mode = "NORMAL";
    this.generatorWatts = 110;
  }
  receiveMessage(message) {
    let receiveMessageObject = {};
    let results = [];

    for (let i = 0; i < message.commands.length; i++) {
      if (
        message.commands[i].commandType == "MODE_CHANGE" &&
        message.commands[i].value == "LOW_POWER"
      ) {
        this.mode = "LOW_POWER";
        let completedObject = { completed: true };
        results.push(completedObject);
      }
      if (
        message.commands[i].commandType == "MODE_CHANGE" &&
        message.commands[i].value == "NORMAL"
      ) {
        this.mode = "NORMAL";
        let completedObject = { completed: true };
        results.push(completedObject);
      }
      if (message.commands[i].commandType == "STATUS_CHECK") {
        let statusCheckObject = {
          completed: true,
          roverStatus: {
            mode: this.mode,
            generatorWatts: this.generatorWatts,
            position: this.position,
          },
        };
        results.push(statusCheckObject);
      }
      if (message.commands[i].commandType == "MOVE" && this.mode == "NORMAL") {
        this.position = message.commands[i].value;
        let completedObject = { completed: true };
        results.push(completedObject);
      }
      if (
        message.commands[i].commandType == "MOVE" &&
        this.mode == "LOW_POWER"
      ) {
        let completedObject = { completed: false };
        results.push(completedObject);
      }
    }
    return (receiveMessageObject = {
      message: message.name,
      results: results,
    });
  }
}
module.exports = Rover;
