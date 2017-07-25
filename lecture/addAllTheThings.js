// 1st Scenario "All numbers"
// node addAllTheThings.js 10 20 5.5

function run(input) {
// background
// set the starting running total
var sum = 0;

// execution phase
// add each item in array to the sum
for (var i = 0; i < input.length;i++) {
    sum += input[i];
}

// output phase
console.log("sum = " + sum);
return sum;
}

if (process.env.NODE_ENV === 'test') {
    console.log("Test 1");
    console.log(run([10, 20, 5.5]) === 35.5 ? 'PASS' : 'FAIL');
    console.log(run([10, -10, 0]) === 0 ? 'PASS' : 'FAIL');
    console.log("Test 2 - Non number input");
    console.log(run([10, 'f', 'foo', 0]) === 0 ? 'PASS' : 'FAIL');
}