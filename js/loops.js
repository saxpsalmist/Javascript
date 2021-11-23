// Iterations

// Arrays --- is a collection of data

const foods = ['rice', 'beans', 'yam', 'potatoes'];

// access

// index based | zero index

console.log(foods[2]);
console.log(foods);

// for loop
// while loop
// foreach()

// Array.length --- Return the total number of elements in the array
// console.log(foods.length);

// for loop
for (let i = 0; i < foods.length; i += 1) {
  let result = `(for loop)This is ${foods[i]}`;
  console.log(result);
}

// while loop
let i = 0;
while (i < foods.length) {
  let result = `(while loop) This is ${foods[i]}`;
  console.log(result);

  i++;
}

// CodeLab
// Write a function that calculates the multiples of a given number (nth) from 1 - 12.

const multiplication = (n) => {
  let output = '';

  for (let i = 1; i <= 12; i++) {
    output += `${n} x ${i} = ${n * i} \n`;
  }

  return output;
};

console.log(multiplication(34));
