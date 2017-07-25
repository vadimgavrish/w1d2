function countVowels (input) {

    var vowelCount = {
        a: 0,
        e: 0,
        i: 0,
        o: 0,
        u: 0
    }

    for (var i = 0; i < input.length; i++) {
        switch(input[i]) {
            case 'a':
                vowelCount.a += 1;
                console.log('Found A');
                break;
            case 'e':
            vowelCount.a += 1;
                console.log('Found E');
                break;
                vowelCount.a += 1;
            case 'i':
                console.log('Found I');
                break;
            case 'o':
                 vowelCount.a += 1;
                console.log('Found O');
                break;
            case 'u':
                vowelCount.a += 1;
                console.log('Found U');
                break;
        }
    }
    return vowelCount;
}

var testResults = countVowels('the bird is the word');
console.log(testResults.e === 2 ? 'PASS' : 'FAIL');
console.log(testResults.o === 1 ? 'PASS' : 'FAIL');
console.log(testResults.a === 0 ? 'PASS' : 'FAIL');