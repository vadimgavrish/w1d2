// get password from command line
var input = process.argv.slice(2);

// check if password is one word
if (input[1]) {
    console.log("Please enter a valid password!");
} else {

    input = input.toString();
    
    function obfuscate (password) {                        // refactored obfuccate function

        var original = ["a", "e", "o", "l"];
        var replacement = ["4", "3", "0", "1"];

        for (var i = 0; i < original.length; i++) {
            var re = new RegExp(original[i],"g")            // alternate way of defining regular expression
            input = input.replace(re, replacement[i]);
        }
        
        return input;
    }   

    console.log(obfuscate(input));
}