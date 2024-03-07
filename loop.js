let numbers = [10, 20, 3, 14, 55];

// Using for loop
console.log("Using for loop:");
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// Using do-while loop
console.log("\nUsing do-while loop:");
let j = 0;
do {
    console.log(numbers[j]);
    j++;
} while (j < numbers.length);

// Using while loop
console.log("\nUsing while loop:");
let k = 0;
while (k < numbers.length) {
    console.log(numbers[k]);
    k++;
}

// Using for loop with break and continue
console.log("\nUsing for loop with break and continue:");
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 3) {
        continue; 
    }
    if (numbers[i] === 14) {
        break; 
    }
    console.log(numbers[i]);
}

// Calculating sum, average, largest, and smallest
let sum = 0;
let largest = -Infinity;
let smallest = Infinity;

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
    if (numbers[i] > largest) {
        largest = numbers[i];
    }
    if (numbers[i] < smallest) {
        smallest = numbers[i];
    }
}

let average = sum / numbers.length;

console.log("\nSum:", sum);
console.log("Average:", average);
console.log("Largest Number:", largest);
console.log("Smallest Number:", smallest);
