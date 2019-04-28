//do..while loop 1 through 1000
let numbers = 1;
do {
  numbers += 1;
  console.log(numbers);
} while (numbers < 1000);


//Use a for...in loop and if statement to console.log value associated with the key birthDate if the birth year is an odd number
const person = {
  firstName: "Jane",
  lastName: "Doe",
  birthDate: "Jan 5, 1925",
  gender: "female"
};


let birthYear = person.birthDate.slice(7,11);


for (birthDate in person) {
    if (birthYear % 2 != 0) {
  console.log(birthYear + ": This is an odd year.");
}
    else {
      console.log(birthYear +'The year is even');  
    }
}

//Regex//
let birthArray = person.birthDate.split(/, /);
console.log(birthArray);
let birthYear1=birthArray.pop();

for (birthDate in person) {
  if (birthYear1 % 2 != 0) {
    console.log("The year is odd!!!");
  } else {
    console.log("The year is even!!");
  }
}

// Create an arrayOfPeople containing multiple objects

const arrayOfPeople = [
    {
      firstName: "LeighAnn",
      lastName: "Jensen",
      birthDate: "Mar 29, 1989",
      gender: "female",
    },
    {
      firstName: "Alayna",
      lastName: "Puckett",
      birthDate: "Feb 28, 1992",
      gender: "female", 
    },
    {
      firstName: "Nathan",
      lastName: "Puckett",
      birthDate: "Mar 12, 1997",
      gender: "male",
    },
    {
      firstName: "Haley",
      lastName: "Spradlin",
      birthDate: "April 24, 1992",
      gender: "female",
    }
  ]
  
// Use .map() to map over the arrayOfPeople and console.log() their information.

const friends = arrayOfPeople.map(arrayOfPeople => (arrayOfPeople));

console.log(friends);

// Use .filter() to filter and console.log only males in the array.

let maleGenPerson = arrayOfPeople.filter(arrayOfPeople => arrayOfPeople.gender === 'male');
console.log(maleGenPerson);


// Use .filter() to filter and console.log people that were born before Jan 1, 1990.

let bornBefore = arrayOfPeople.filter(function(currentYear) {
  let displayBorn = currentYear.birthDate.substring(8, 12);
  if (displayBorn < 1990) {
  console.log([currentYear.firstName, currentYear.lastName, currentYear.birthDate]);
  }
}); 