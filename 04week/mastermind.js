'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let board = [];
let solution = '';
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

function printBoard() {
  for (let i = 0; i < board.length; i++) {
    console.log(board[i]);
  }
}

function generateSolution() {
  for (let i = 0; i < 4; i++) {
    const randomIndex = getRandomInt(0, letters.length);
    solution += letters[randomIndex];
  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function generateHint(solution, guess) {
  let solutionArray = solution.split('');
  let guessArray = guess.split('');
  let correctLetLoc = 0;
  for (let i=0; i<solutionArray.length; i++) {
    if (solutionArray[i] == guessArray[i]){
    correctLetLoc = correctLetLoc + 1;
    solutionArray[i] = null;
   }
  }
  let correctLetters = 0;
  for (let x=0; x<solutionArray.length; x++){
   let targetIndex = guessArray.indexOf(solutionArray[x]);
    if (targetIndex > -1) {
        correctLetters = correctLetters + 1;
        solutionArray[x] = null;
        }
    }
    
    return correctLetLoc+"-" + correctLetters;
}
 

function mastermind(guess) {
  solution = 'abcd';
  if (board.length >= 10){
    console.log(`You ran out of guesses! The solution was: ${solution}`);
  } else {
    if (guess != solution) {
      let hints = generateHint(solution, guess);
      board.push(hints)
    } else {
      console.log('You guessed it!');
      return 'You guessed it!';
    }
  }
}

function getPrompt() {
  rl.question('guess: ', (guess) => {
    mastermind(guess);
    printBoard();
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {
  solution = 'abcd';
  describe('#mastermind()', () => {
    it('should register a guess and generate hints', () => {
      mastermind('aabb');
      assert.equal(board.length, 1);
    });
    it('should be able to detect a win', () => {
      assert.equal(mastermind(solution), 'You guessed it!');
    });
  });
  describe('#generateHint()', () => {
    it('should generate hints', () => {
      assert.equal(generateHint(solution, 'abdc'), '2-2');
    });
    it('should generate hints if solution has duplicates', () => {
      assert.equal(generateHint(solution, 'aabb'), '1-1');
    });
  });
} else {
  generateSolution();
  getPrompt();
}
