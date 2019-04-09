"use strict";

const assert = require("assert");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function pigLatin(word) {
  // trim and get rid of whitespace
  let betterWord = word.trim().toLowerCase();
  console.log(betterWord);
  
  //turns string into array
  let wordArray = betterWord.split("");
  console.log(wordArray);

  //turns moves first letter of array to end
  wordArray.push(wordArray.shift());
  console.log(wordArray);

  //adds ay to end of array
  wordArray.push("ay");
  console.log(wordArray);

//converts back to string
 let stringAgain= wordArray.join('');
  console.log(stringAgain);
}



function getPrompt() {
  rl.question("word ", answer => {
    console.log(pigLatin(answer));
    getPrompt();
  });
}

// Tests

if (typeof describe === "function") {
  describe("#pigLatin()", () => {
    it("should translate a simple word", () => {
      assert.equal(pigLatin("car"), "arcay");
      assert.equal(pigLatin("dog"), "ogday");
    });
    it("should translate a complex word", () => {
      assert.equal(pigLatin("create"), "eatecray");
      assert.equal(pigLatin("valley"), "alleyvay");
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin("egg"), "eggyay");
      assert.equal(pigLatin("emission"), "emissionyay");
    });
    it("should lowercase and trim word before translation", () => {
      assert.equal(pigLatin("HeLlO "), "ellohay");
      assert.equal(pigLatin(" RoCkEt"), "ocketray");
    });
  });
} else {
  getPrompt();
}
