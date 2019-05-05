'use strict';

const assert = require('assert');
const readline = require('readline');

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
  // Moves the pieces from one stack to another
  //.slice(-1,1) does not pass test but .pop does
  stacks[endStack].push(stacks[startStack].pop());
}

  function isValid(startStack, endStack) {
    if (
      endStack === "a" ||
      endStack === "b" ||
      endStack === "c" && startStack === "a" ||
      startStack === "b" ||
      startStack === "c"
    ) {
      return true;
    } else {
      console.log("Please enter a valid input")
      return false;
    }
  }

  function isLegal(startStack, endStack) {
    //first if both arrays return undefined for last item in array index then both are empty and should return false
    //length -1 because zero index
    if (
      stacks[startStack][stacks[startStack].length - 1] === undefined &&
      stacks[endStack][stacks[endStack].length - 1] === undefined
    ) {
      console.log("Both stacks were empty. Please choose a start stack with numbers");
      return false;

    //if start stack has numbers and end stack is empty, then move is legal
    } else if (
      stacks[startStack][stacks[startStack].length - 1] <
        stacks[endStack][stacks[endStack].length - 1] ||
      stacks[endStack][stacks[endStack].length - 1] === undefined
    ) {
      return true;

    //only other option left bigger number can't go on top of smaller number  
    } else {
      console.log('A bigger number cannot go on top of a smaller number')
      return false;
    }
  }
  function checkForWin() {
    if (stacks.b.toString() == '4,3,2,1' || stacks.c.toString() == '4,3,2,1') {
      // check to see if either stack b or c contains all 4 numbers
      console.log('You Win!');
      return true;
    } else return false;
  }

function towersOfHanoi(startStack, endStack) {
  // Runs the game
  let newStart = startStack.toLowerCase().trim();
  let newEnd = endStack.toLowerCase().trim();
  if (isValid(newStart, newEnd)) {
    if (isLegal(newStart, newEnd)) {
      movePiece(newStart, newEnd);
      checkForWin();
    }
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

// Tests


if (typeof describe === "function") {
  describe("#towersOfHanoi()", () => {
    it("should be able to move a block", () => {
      towersOfHanoi("a", "b");
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });

  // New Test 1
  describe("#isValid()", () => {
    it("should allow a valid move", () => {
      isValid("a", "b");
      isValid("a", "c");
      isValid("c", "a");
    });
  });

  // New Test 2
  describe("#isValid()", () => {
    it("should not allow an invalid input", () => {
      isValid("X", "yellow");
    });
  });


  describe("#isLegal()", () => {
    it("should not allow an illegal move", () => {
    stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal("a", "b"), false);
      // New Test for legal move should return false
      stacks = {
        a: [4, 3, 2],
        b: [],
        c: [1]
      };
      assert.equal(isLegal("a", "c"), false);
    });
    // New Test for legal move should return false
    stacks = {
      a: [4, 3, 2, 1],
      b: [],
      c: []
    };
    assert.equal(isLegal("b", "c"), false);
    it("should allow a legal move", () => {

      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal("a", "c"), true);
    });
  });
  describe("#checkForWin()", () => {
    it("should detect a win", () => {
    
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };  //column b win
      assert.equal(checkForWin(), true);


      stacks = { a: [], b: [], c: [4, 3, 2, 1] }; //added: win in column c
      assert.equal(checkForWin(), true);

      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
   
      stacks = { a: [4, 3, 2, 1], b: [], c: [] }; // added: can't win in column a
      assert.equal(checkForWin(), false);
    });
  });
} else {
  getPrompt();
}
