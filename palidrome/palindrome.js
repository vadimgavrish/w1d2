function isPalindrome(str) {
  
  var noSpaces = str.toLowerCase().split(" ").join("");
  var mid = Math.floor(noSpaces.length/2);
  var last = noSpaces.length - 1;

  if (last === 0) {
    return true;
  }

  for (var i = 0; i < mid; i++) {
    if (noSpaces[i] !== noSpaces[last - i]) return false;
  }
  return true;
}

// Test driver code. These should all log true.
console.log(isPalindrome('p') === true);
console.log(isPalindrome('foo') === false);
console.log(isPalindrome('racecar') === true);
console.log(isPalindrome('Kayak') === true);
console.log(isPalindrome('a santa at NASA') === true);
console.log(isPalindrome('live without evil') === false);
console.log(isPalindrome('just some random words') === false);
