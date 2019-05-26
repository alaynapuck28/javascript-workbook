"use strict;";

//******* not necessary  **********/
// const assert = require('assert');
// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

const arrOfPeople = [
  {
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
  }
];

const listOfPlayers = [];
const blueTeam = [];
const redTeam = [];


//Player class includes canThrowball, canDodgeball, hasPaid, isHealthy and yearsExperience
//new properties from when they were in arrOfPeople
class Player {
  constructor(
    id,
    name,
    age,
    skillSet,
    placeBorn,
    canThrowBall,
    canDodgeBall,
    hasPaid,
    isHealthy,
    yearsExperience
  ) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.skillSet = skillSet;
    this.placeBorn = placeBorn;
    this.canThrowBall = canThrowBall;
    this.canDodgeBall = canDodgeBall;
    this.hasPaid = hasPaid;
    this.isHealthy = isHealthy;
    this.yearsExperience = yearsExperience;
  }
  //method (i.e. function) to joinRed Team is part of Player class
  joinRedTeam(redTeam) {
    this.redTeam = redTeam;
    player.redTeam.push(this);
  }
  //method (i.e. function) to joinBlueTeam is part of Player class
  joinBlueTeam(blueTeam) {
    this.blueTeam = blueTeam;
    player.blueTeam.push(this);
  }
}
//this class includes mascot and color
class RedTeammate {
  constructor(
    id,
    name,
    age,
    skillSet,
    placeBorn,
    canThrowBall,
    canDodgeBall,
    hasPaid,
    isHealthy,
    yearsExperience,
    mascot,
    teamColor
  ) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.skillSet = skillSet;
    this.placeBorn = placeBorn;
    this.canThrowBall = canThrowBall;
    this.canDodgeBall = canDodgeBall;
    this.hasPaid = hasPaid;
    this.isHealthy = isHealthy;
    this.yearsExperience = yearsExperience;
    this.mascot = mascot;
    this.teamColor = teamColor;
  }
}

//this class includes mascot and color
class BlueTeammate {
  constructor(
    id,
    name,
    age,
    skillSet,
    placeBorn,
    canThrowBall,
    canDodgeBall,
    hasPaid,
    isHealthy,
    yearsExperience,
    mascot,
    teamColor
  ) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.skillSet = skillSet;
    this.placeBorn = placeBorn;
    this.canThrowBall = canThrowBall;
    this.canDodgeBall = canDodgeBall;
    this.hasPaid = hasPaid;
    this.isHealthy = isHealthy;
    this.yearsExperience = yearsExperience;
    this.mascot = mascot;
    this.teamColor = teamColor;
  }
}

//******************** Create List of People *****************************
const listPeopleChoices = () => {
  const listOfPeople = document.getElementById("people");
  arrOfPeople.map(person => {
    const li = document.createElement("li");
    const button = document.createElement("button");
    button.innerHTML = "Make new player";

    //turn person into player on click
    button.addEventListener("click", function() {
      makePlayer(person.id);
      //once person turns into player they're removed from people list
      listOfPeople.removeChild(li);
    });
    li.appendChild(button);
    //info that appears when they are in player list
    li.appendChild(
      document.createTextNode("Player: " + person.name + " " + person.skillSet)
    );
    listOfPeople.append(li);
  });
};

//******************** Make Player Function *****************************

//turn someone from list of people into player
const makePlayer = id => {
  const players = document.getElementById("players");
  const findPlayer = arrOfPeople.find(function(entry) {
    return entry.id == id;
  });
  const playerIndex = arrOfPeople.indexOf(findPlayer);
  //variabe for Player Class
  const newPlayer = new Player(
    findPlayer.id,
    findPlayer.name,
    findPlayer.age,
    findPlayer.skillSet,
    findPlayer.placeBorn,
    true,
    true,
    true,
    true,
    3
  );
  listOfPlayers.push(newPlayer);
  arrOfPeople.splice(playerIndex, 1);
  //this adds people to list of players
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(newPlayer.name + " - "));

  //blue button styling
  const button_blue = document.createElement("button");
  button_blue.style.backgroundColor = "Blue";
  button_blue.style.color = "white";
  button_blue.style.border = "solid 1px white";
  button_blue.innerHTML = "Blue Team";
  //when blue button clicked joinBlueTeam function runs & player id is passed to function
  button_blue.addEventListener("click", function() {
    joinBlueTeam(newPlayer.id);
    players.removeChild(li);
  });
  li.appendChild(button_blue);
  const button_red = document.createElement("button");

  // red button styling
  button_red.style.backgroundColor = "Red";
  button_red.style.color = "white";
  button_red.style.border = "solid 1px white";
  button_red.innerHTML = "Red Team";

  //when red button clicked joinRedTeam function runs & player id is passed to function
  button_red.addEventListener("click", function() {
    joinRedTeam(newPlayer.id);
    //remove player from list once added to team
    players.removeChild(li);
  });
  li.appendChild(button_red);
  players.append(li);
};

//******************** Join Red Team Function *****************************
//function that assigns player to Red Team
const joinRedTeam = id => {
  const playersRed = document.getElementById("red");
  //style
  playersRed.style.backgroundColor = "red";
  playersRed.style.border = "solid 3px white";
  playersRed.style.color = "white";
  //find players by id
  const selectRed = listOfPlayers.find(function(pick) {
    return pick.id == id;
  });

  const redIndex = listOfPlayers.indexOf(selectRed);
  //add to RedTeammate class

  //assigned value to properties not already listed (canDodgeball & hasPaid = true etc., years experience=3, mascot = Rock Lobster)
  const newRedPlayer = new RedTeammate(
    selectRed.id,
    selectRed.name,
    selectRed.age,
    selectRed.skillSet,
    selectRed.placeBorn,
    true,
    true,
    true,
    true,
    3,
    "Rock Lobster",
    "Red"
  );
  redTeam.push(newRedPlayer);
  //no longer in player list
  listOfPlayers.splice(redIndex, 1);
  const li = document.createElement("li");
  li.appendChild(
    document.createTextNode(
      newRedPlayer.name +
        " - " +
        "Mascot = " +
        newRedPlayer.mascot +
        " and Team Color is " +
        newRedPlayer.teamColor
    )
  );
  playersRed.append(li);
};

//******************** Join Blue Team Function *****************************
//same function for blue team
const joinBlueTeam = id => {
  const playersBlue = document.getElementById("blue");
  playersBlue.style.backgroundColor = "blue";
  playersBlue.style.color = "white";
  playersBlue.style.border = "solid white 2px";
  const selectBlue = listOfPlayers.find(function(pick) {
    return pick.id == id;
  });
  const blueIndex = listOfPlayers.indexOf(selectBlue);

  const newBluePlayer = new BlueTeammate(
    selectBlue.id,
    selectBlue.name,
    selectBlue.age,
    selectBlue.skillSet,
    selectBlue.placeBorn,
    true,
    true,
    true,
    true,
    3,
    "Chupacabra",
    "Blue"
  );
  blueTeam.push(newBluePlayer);
  listOfPlayers.splice(blueIndex, 1);

  const li = document.createElement("li");
  li.appendChild(
    document.createTextNode(
      newBluePlayer.name +
        " - " +
        "Mascot = " +
        newBluePlayer.mascot +
        " and Team Color is " +
        newBluePlayer.teamColor
    )
  );
  playersBlue.append(li);
};
//tests
      let assert = require('assert');
      
      if (typeof describe === 'function'){
        describe('Player', function(){
          it('should throw a ball, dodge a ball, has paid dues, is healthy, has experience', function(){
            let newPlayer = new Player('newPlayer.id', 'newPlayer.name', 'newPlayer.age', 'newPlayer.skillSet', 'newPlayer.placeBorn', true, true, true, true, 3);
            assert.equal(newPlayer.canThrowBall, true);
            assert.equal(newPlayer.canDodgeBall, true);
            assert.equal(newPlayer.hasPaid, true);
            assert.equal(newPlayer.isHealthy, true);
            assert.equal(newPlayer.yearsExperience, 3);
          });
        });
      }
      if (typeof describe === 'function'){
        describe('Team', function(){
        it('team mate should have mascot', function(){
          let  newBluePlayer = new BlueTeammate ('newBluePlayer.id', 'newBluePlayer.name', 'newBluePlayer.age', 'newBluePlayer.skillSet', 'newBluePlayer.placeBorn', true, true, true, true, 3, 'Chupacabra', 'Blue');
          assert.equal(newBluePlayer.mascot, 'Chupacabra');
        });
      });
    }
        if (typeof describe === 'function'){
          describe('Team', function(){
          it('team mate should have team color', function(){
            let  newBluePlayer = new BlueTeammate ('newBluePlayer.id', 'newBluePlayer.name', 'newBluePlayer.age', 'newBluePlayer.skillSet', 'newBluePlayer.placeBorn', true, true, true, true, 3, 'Chupacabra', 'Blue');
            assert.equal(newBluePlayer.teamColor, 'Blue');
          });
      });
    }
