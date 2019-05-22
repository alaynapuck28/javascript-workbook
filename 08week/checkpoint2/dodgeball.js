'use strict;'
// const assert = require('assert');
// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

const arrOfPeople = [{
    id: 2,
    name: "Charles Young",
    age: 55,
    skillSet: "welding",
    placeBorn: "Omaha, Nebraska"
  },
  {
    id: 3,
    name: "Judy Twilight",
    age: 35,
    skillSet: "fishing",
    placeBorn: "Louisville, Kentucky"
  },
  {
    id: 4,
    name: "Cynthia Doolittle",
    age: 20,
    skillSet: "tic tac toe",
    placeBorn: "Pawnee, Texas"
  },
  {
    id: 5,
    name: "John Willouby",
    age: 28,
    skillSet: "pipe fitting",
    placeBorn: "New York, New York"
  },
  {
    id: 6,
    name: "Stan Honest",
    age: 20,
    skillSet: "boom-a-rang throwing",
    placeBorn: "Perth, Australia"
  },
  {
    id: 7,
    name: "Mia Watu",
    age: 17,
    skillSet: "acrobatics",
    placeBorn: "Los Angeles, California"
  },
  {
    id: 8,
    name: "Walter Cole",
    age: 32,
    skillSet: "jump rope",
    placeBorn: "New Orleans, Louisiana"
  },
]


const listOfPlayers = []
const blueTeam = []
const redTeam = []

class Player {
  constructor(id, name, age, skillSet, placeBorn,canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience) {
      this.id=id;
      this.name=name;
      this.age=age;
      this.skillSet=skillSet;
      this.placeBorn=placeBorn;
      this.canThrowBall=canThrowBall;
      this.canDodgeBall=canDodgeBall;
      this.hasPaid=hasPaid;
      this.isHealthy=isHealthy;
      this.yearsExperience=yearsExperience;

  }
  joinRedTeam(redTeam){
    this.redTeam=redTeam;
    player.redTeam.push(this);
  }
  joinBlueTeam(blueTeam){
    this.blueTeam=blueTeam;
    player.blueTeam.push(this);
  }
};

class RedTeammate {

    constructor(id, name, age, skillSet, placeBorn,canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience, mascot, teamColor) {
      this.id=id;
      this.name=name;
      this.age=age;
      this.skillSet=skillSet;
      this.placeBorn=placeBorn;
      this.canThrowBall=canThrowBall;
      this.canDodgeBall=canDodgeBall;
      this.hasPaid=hasPaid;
      this.isHealthy=isHealthy;
      this.yearsExperience=yearsExperience;
      this.mascot=mascot;
      this.teamColor=teamColor;

  }
  }

  class BlueTeammate {

    constructor(id, name, age, skillSet, placeBorn,canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience, mascot, teamColor) {
      this.id=id;
      this.name=name;
      this.age=age;
      this.skillSet=skillSet;
      this.placeBorn=placeBorn;
      this.canThrowBall=canThrowBall;
      this.canDodgeBall=canDodgeBall;
      this.hasPaid=hasPaid;
      this.isHealthy=isHealthy;
      this.yearsExperience=yearsExperience;
      this.mascot=mascot;
      this.teamColor=teamColor;

  }
  }


const listPeopleChoices = () => {
  const listOfPeople = document.getElementById('people');
  arrOfPeople.map(person => {

    const li = document.createElement('li');
    const button= document.createElement('button');
    button.innerHTML="Make new player";
    button.addEventListener('click', function(){ makePlayer(person.id);
      listOfPeople.removeChild(li)});
      li.appendChild(button);
      li.appendChild(document.createTextNode("Player: "+ person.name + " " + person.skillSet))
      listOfPeople.append(li);
    }) 
};

const makePlayer = (id) => {
  const listOfPlayers = document.getElementById('players');
  const findPlayerById = arrOfPeople.find(function(entry){
    return entry.id==id;
  });
  const playerIndex = arrOfPeople.indexOf(findPlayerById);
  const newPlayer= new Player (findPlayerById.id, findPlayerById.name, findPlayerById.age, findPlayerById.skillSet, findPlayerById.placeBorn, true, true, true, true, 3);
  listOfPlayers.push(newPlayer);
  arrOfPeople.splice(playerIndex,1);
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(newPlayer.name + "-"));
  listOfPlayers.append(li);
  //create blue and red buttons 

}