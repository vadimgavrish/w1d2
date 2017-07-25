var imHere = true;

var tweeps = ['@wired', '@techmeme', '@mozilla'];

function getFirst (someArray) {
    return someArray[0];  
}                                           

var getForth = function (someArray) {
    return someArray[3];
}

tweeps.push(getForth);


console.log('The first Tweep is ', getFirst(tweeps));
console.log('The forth Tweep is ', tweeps[3](tweeps));
console.log('My tweeps after', tweeps);