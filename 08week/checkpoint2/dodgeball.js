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
    //turn person into player
    button.addEventListener('click', function(){ makePlayer(person.id);
      listOfPeople.removeChild(li)});
      li.appendChild(button);
      li.appendChild(document.createTextNode("Player: "+ person.name + " " + person.skillSet))
      listOfPeople.append(li);
       
    }) 
};

//function attached to join blue team button
// function joinBlueTeam(player){
//     let blueList= document.getElementById('blue');
//     const li = document.createElement('li');
//     li.appendChild(document.createTextNode("Player: "+ player.name + " " + player.skillSet))
//     blueList.append(li)
//   }

  //function attached to join red team function
// function joinRedTeam(player){
//     redTeam.push(player);
//     let redList= document.getElementById('red');
//     const li = document.createElement('li');
//     li.appendChild(document.createTextNode("Player: "+ player.name + " " + player.skillSet))
//     redList.append(li);
//   }

const joinRedTeam = (id) =>{
  const playersRed = document.getElementById('red');
  playersRed.style.backgroundColor = 'red';
  playersRed.style.border = 'solid black 2px';
  playersRed.style.color = 'yellow';
  const selectRed = listOfPlayers.find(function(pick){
  return pick.id == id;
  });
  const redIndex = listOfPlayers.indexOf(selectRed);
  
  const newRedPlayer = new RedTeammate (selectRed.id, selectRed.name, selectRed.age, selectRed.skillSet, selectRed.placeBorn, true, true, true, true, 4, 'Mister Jelly Bear', 'Red');
  redTeam.push(newRedPlayer);
  listOfPlayers.splice(redIndex, 1);
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(newRedPlayer.name + " - " + "Mascot = " + newRedPlayer.mascot + " and Team Color is " + newRedPlayer.teamColor));
  playersRed.append(li);
  }

  const joinBlueTeam = (id) =>{
    const playersBlue = document.getElementById('blue');
    playersBlue.style.backgroundColor = 'blue';
    playersBlue.style.color = 'white';
    playersBlue.style.border = 'solid black 2px';
    const selectBlue = listOfPlayers.find(function(pick){ 
    return pick.id == id; 
    });
    const blueIndex = listOfPlayers.indexOf(selectBlue);
    
    const newBluePlayer = new BlueTeammate (selectBlue.id, selectBlue.name, selectBlue.age, selectBlue.skillSet, selectBlue.placeBorn, true, true, true, true, 4, 'Dragon', 'Blue');
    blueTeam.push(newBluePlayer);
    listOfPlayers.splice(blueIndex, 1); 
    
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(newBluePlayer.name + " - " + "Mascot = " + newBluePlayer.mascot + " and Team Color is " + newBluePlayer.teamColor));
    playersBlue.append(li);
    }


  //change from people to player
  //////////////////////////////////////////////////////////////////
// const makePlayer = (id) => {
//   const newListOfPeople = document.getElementById('players');
//   const findPlayerById = arrOfPeople.find(function(entry){
//     return entry.id==id;
//   });
//   const playerIndex = arrOfPeople.indexOf(findPlayerById);
//   const newPlayer= new Player(findPlayerById.id, findPlayerById.name, findPlayerById.age, findPlayerById.skillSet, findPlayerById.placeBorn, true, true, true, true, 3);
  
//   //push players to listOfPlayers array
//   listOfPlayers.push(newPlayer)
//   arrOfPeople.splice(playerIndex, 1);
//   console.log(listOfPlayers)
//   console.log(arrOfPeople)
  
//   listOfPlayers.map(player =>{

//     //create red and blue button for every player
//     const li = document.createElement('li');
//     const redButton= document.createElement('button');
//     const blueButton= document.createElement('button');

//     //button text
//     blueButton.innerHTML="Join blue team";
//     redButton.innerHTML="Join red team";

//     redButton.addEventListener('click', function() {joinRedTeam(player.id)});
//       // newListOfPeople.removeChild(li);
//       li.appendChild(redButton);
//       newListOfPeople.append(li);
//       console.log(redTeam)

//     blueButton.addEventListener('click', function() {joinBlueTeam(player.id)});
//       // newListOfPeople.removeChild(li);
//       li.appendChild(blueButton);
//       li.appendChild(document.createTextNode("Player: "+ player.name + " " + player.skillSet))
//       newListOfPeople.append(li); 
//   })} 
  //////////////////////////////////////////////////////////////////////////

  const makePlayer = (id) => {
    const players = document.getElementById('players');
    const findPlayer = arrOfPeople.find(function(entry){ 
    return entry.id == id; 
    });
    const playerIndex = arrOfPeople.indexOf(findPlayer);
    //this is the generic instance of the Player Class
    const newPlayer = new Player (findPlayer.id, findPlayer.name, findPlayer.age, findPlayer.skillSet, findPlayer.placeBorn, true, true, true, true, 4);
    listOfPlayers.push(newPlayer);
    arrOfPeople.splice(playerIndex, 1);
    //this adds people to list of players DOM
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(newPlayer.name + " - "));
    
    const button_blue = document.createElement("button");
    button_blue.style.backgroundColor='Blue';
    button_blue.style.color = 'white';
    button_blue.style.border = 'solid 1px black';
    button_blue.innerHTML = "Blue Team";
    button_blue.addEventListener('click', function() {joinBlueTeam(newPlayer.id);
    players.removeChild(li);})
    li.appendChild(button_blue);
    const button_red = document.createElement("button");
    button_red.style.backgroundColor='Red';
    button_red.style.color = 'yellow';
    button_red.style.border = 'solid 1px black';
    button_red.innerHTML = "Red Team";
    button_red.addEventListener('click', function() {joinRedTeam(newPlayer.id);
    players.removeChild(li);})
    li.appendChild(button_red);
    
    players.append(li);
    }


  // arrOfPeople.splice(playerIndex,1);


  // const li = document.createElement('li');
  // li.appendChild(document.createTextNode(newPlayer.name + "-"));
  // listOfPlayers.append(li);