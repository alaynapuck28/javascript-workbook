"use strict";

const assert = require("assert");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let stacks = { 
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

function movePiece(startStack, endStack) {
  const towerA = stacks.a;
  const towerB = stacks.b;
  const towerC = stacks.c;
  if (towerA.length <= 3 && towerB.length <= 3 && towerC.length <= 3);
  {
    stacks[endStack].push(stacks[startStack].pop());
  }
}

function isValid(startStack, endStack) {
  if (
    endStack === "a" ||
    endStack === "b" ||
    (endStack === "c" && startStack === "a") ||
    startStack === "b" ||
    startStack === "c"
  ) {
    return true;
  } else {
    return false;
  }
}

function isLegal(startStack, endStack) {
  if (
    stacks[startStack][stacks[startStack].length - 1] === undefined &&
    stacks[endStack][stacks[endStack].length - 1] === undefined
  ) {
    console.log("both undefined");
    return false;
  } else if (
    stacks[startStack][stacks[startStack].length - 1] <
      stacks[endStack][stacks[endStack].length - 1] ||
    stacks[endStack][stacks[endStack].length - 1] === undefined
  ) {
    return true;
  } else {
    return false;
  }
}

function checkForWin() {
  if (stacks.b.length === 4 || stacks.c.length === 4) {
    console.log("You win");
    return true;
  } else {
    return false;
  }

  function towersOfHanoi(startStack, endStack) {
    let newEnd = endStack.trim().toLowerCase();
    let newStart = startStack.trim().toLowerCase();
    if (isValid(newStart, newEnd)) {
      if (isLegal(newStart, newEnd)) {
        movePiece(newStart, newEnd)
        checkForWin()
      
      } else {
        return false
      }
    } else{
      return false
    }
  }

  function getPrompt() {
    printStacks();
    rl.question("start stack: ", startStack => {
      rl.question("end stack: ", endStack => {
        towersOfHanoi(startStack, endStack);
        getPrompt();
      });
    });
  }

  if (typeof describe === 'function') {

    describe('#towersOfHanoi()', () => {
      it('should be able to move a block', () => {
        towersOfHanoi('a', 'b');
        assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
        towersOfHanoi('a', 'c'); // added
        assert.deepEqual(stacks, { a: [4, 3], b: [1], c: [2] });
        towersOfHanoi('b', 'c'); // added
        assert.deepEqual(stacks, { a: [4, 3], b: [], c: [2, 1] });
      });
      it('should not be able to move a block', () => { // added
        towersOfHanoi('b', 'a');
        assert.deepEqual(stacks, { a: [4, 3], b: [], c: [2, 1] });
        towersOfHanoi('a', 'c');
        assert.deepEqual(stacks, { a: [4, 3], b: [], c: [2, 1] });
        towersOfHanoi('b', 'c');
        assert.deepEqual(stacks, { a: [4, 3], b: [], c: [2, 1] });
      });
    });
  
    describe('#movePiece()', () => { //added
      it('should move the piece', () => {
        stacks = {
          a: [4, 3, 2],
          b: [1],
          c: []
        };
        assert.equal(isLegal('a', 'c'), true);
        stacks = {
          a: [4, 3],
          b: [1],
          c: [2]
        };
        assert.equal(isLegal('b', 'c'), true);
      });
      it('should not move the piece', () => {
        stacks = {
          a: [4, 3],
          b: [1],
          c: [2]
        };
        assert.equal(isLegal('a', 'c'), false);
        stacks = {
          a: [4, 3],
          b: [],
          c: [2, 1]
        };
        assert.equal(isLegal('b', 'c'), false);
      });
    });
  
    describe('#isLegal()', () => {
      it('should not allow an illegal move', () => {
        stacks = {
          a: [4, 3, 2],
          b: [1],
          c: []
        };
        assert.equal(isLegal('a', 'b'), false);
        stacks = { // added
          a: [4, 3],
          b: [2],
          c: [1]
        };
        assert.equal(isLegal('a', 'c'), false);
      });
      it('should allow a legal move', () => {
        stacks = {
          a: [4, 3, 2, 1],
          b: [],
          c: []
        };
        assert.equal(isLegal('a', 'c'), true);
        stacks = { // added
          a: [4, 3],
          b: [],
          c: [2, 1]
        };
        assert.equal(isLegal('a', 'b'), true);
      });
    });
  
    describe('#checkForWin()', () => {
      it('should detect a win', () => {
        stacks = { a: [], b: [4, 3, 2, 1], c: [] };
        assert.equal(checkForWin(), true);
        stacks = { a: [], b: [], c: [4, 3, 2, 1] }; //added
        assert.equal(checkForWin(), true);
        stacks = { a: [1], b: [4, 3, 2], c: [] };
        assert.equal(checkForWin(), false);
        stacks = { a: [4, 3, 2, 1], b: [], c: [] }; //added
        assert.equal(checkForWin(), false);
      });
    });
  
  } else {
  
    getPrompt();
  
  }