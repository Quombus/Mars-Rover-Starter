const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.

describe("Message class", function() {
    
    it("throws error if command type is NOT passed into constructor as the first parameter", function() {
        expect( function() { new Message();}).toThrow(new Error('Name required.'));
      });
    

  it ("is a string that is the name of the message.", function(){
    let constructorTester = new Message("string", ["array"]);
    expect (typeof constructorTester.name).toBe(typeof "")
  });

  it ("is an array of Command objects.", function(){
    let commandObject = new Command(1,2);
    let commandObject1 = new Command(3,4);
    let commandObject2 = new Command(5,6);
    let constructorTester = new Message("string", [commandObject, commandObject1, commandObject2]);

   for (let i = 0; i < constructorTester.commands.length; i++){
      expect (typeof constructorTester.commands[i]).toBe(typeof commandObject)
    };
  });
  
});
