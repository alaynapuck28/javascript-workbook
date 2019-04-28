const arrCars = ["Ford", "BMW", "Toyota", "Chevy"];
console.log(arrCars);

//length of array
console.log(arrCars.length);

//second array
const moreCars = ["Jeep", "Buick", "Cadillac", "Honda"];

//combine the two arrays
const totalCars = arrCars.concat(moreCars);
console.log(totalCars);

//index of Honda and Ford
console.log(totalCars.indexOf("Honda"));
console.log(totalCars.lastIndexOf("Ford"));

//join into string
let betterCars = totalCars.join();
console.log(betterCars);

//back to an array from string
const totalCarz = betterCars.split(",");
console.log(totalCarz);

//reverse the array
const carsInReverse = totalCarz.reverse();
console.log(carsInReverse);

//sort into alphabetical order
console.log(totalCarz.sort());

//Prediction: what is index of first car?
console.log(carsInReverse.indexOf("BMW"));

//Slice
let removedCars = carsInReverse.slice(4, 6);
console.log(removedCars);

//Splice
let carSpliced = carsInReverse.splice(1, 2, "Ford", "Honda");
console.log(carsInReverse);

//Push
carsInReverse.push("Buick", "Cadillac");
console.log(carsInReverse);

//Pop
console.log(carsInReverse.pop());

// shift
let firstElement = carsInReverse.shift();
console.log(firstElement);

//Unshift
carsInReverse.unshift("Jaguar");
console.log(carsInReverse);

// forEach function to add 2 to each number in array
let numbers = [23, 45, 0, 2];
numbers.forEach(function(currentValue, index) {
  numbers[index] = currentValue + 2;
});
console.log(numbers);
