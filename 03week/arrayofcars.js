const arrCars = ['Ford', 'BMW', 'Toyota', 'Chevy']
console.log(arrCars);
console.log(arrCars.length);
const moreCars = ['Jeep', 'Buick','Cadillac', 'Honda']
const totalCars = arrCars.concat(moreCars);
console.log(totalCars);

console.log(totalCars.indexOf('Honda'));
console.log(totalCars.lastIndexOf('Ford'));

let betterCars = totalCars.join();
console.log(betterCars);

const totalCarz = betterCars.split(",");
console.log(totalCarz);
const totalCarsReverse = totalCarz.reverse();
console.log(totalCarsReverse);
console.log(totalCarz.sort());
const rejectCars = totalCarsReverse.slice(0,7);
console.log(rejectCars);


