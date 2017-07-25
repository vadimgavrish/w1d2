var myArgs = process.argv;
myArgs = myArgs.slice(2);  

function rollDice (num) {

var output = "";

for (var i = 0; i < num; i++) {
    
    output += Math.ceil(Math.random() * 6) + ", ";   
}
    return output.slice(0, -2);
}

console.log("Rolled " + myArgs + " dice: " + rollDice(Number(myArgs)));