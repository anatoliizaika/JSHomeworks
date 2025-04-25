const numbers = [3, -1, 0, 4, -5, 0, 7, -2];

let positiveCount = 0;
let negativeCount = 0;
let zeroCount = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        positiveCount++;
    } else if (numbers[i] < 0) {
        negativeCount++;
    } else {
        zeroCount++;
    }
}

console.log("Positive Numbers:", positiveCount);
console.log("Negative Numbers:", negativeCount);
console.log("0 Numbers:", zeroCount);