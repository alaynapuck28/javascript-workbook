'use strict';


let playerTurn = 'X';
let board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];
function horizontalWin() {
  // Possible horizontal wins
  if (board[0][0] == 'X' && board[0][1] == 'X' && board[0][2] == 'X') {
    document.getElementById("winMessage").innerHTML = "<div id='innerMessage'>X Wins</div>";

  } else if (board[0][0] == 'O' && board[0][1] == 'O' && board[0][2] == 'O') {
    document.getElementById("winMessage").innerHTML = "<div id='innerMessage'>O Wins</div>";
  } else if (board[1][0] == 'X' && board[1][1] == 'X' && board[1][2] == 'X') {
    document.getElementById("winMessage").innerHTML = "<div id='innerMessage'>X Wins</div>";
  } else if (board[1][0] == 'O' && board[1][1] == 'O' && board[1][2] == 'O') {
    document.getElementById("winMessage").innerHTML = "<div id='innerMessage'>O Wins</div>";
  } else if (board[2][0] == 'X' && board[2][1] == 'X' && board[2][2] == 'X') {
  document.getElementById("winMessage").innerHTML = "<div id='innerMessage'>X Wins</div>";
  } else if (board[2][0] == 'O' && board[2][1] == 'O' && board[2][2] == 'O') {
    document.getElementById("winMessage").innerHTML = "<div id='innerMessage'>O Wins</div>";
  }
  return true;
}

function verticalWin() {
  // Possible vertical wins
  if (board[0][0] == 'X' && board[1][0] == 'X' && board[2][0] == 'X') {
    document.getElementById("winMessage").innerHTML = "<div id='innerMessage'>X Wins</div>";
  } else if (board[0][0] == 'O' && board[1][0] == 'O' && board[2][0] == 'O') {
    document.getElementById("winMessage").innerHTML = "<div id='innerMessage'>O Wins</div>";
  } else if (board[0][1] == 'X' && board[1][1] == 'X' && board[2][1] == 'X') {
    document.getElementById("winMessage").innerHTML = "<div id='innerMessage'>X Wins</div>";
  } else if (board[0][1] == 'O' && board[1][1] == 'O' && board[2][1] == 'O') {
    document.getElementById("winMessage").innerHTML = "<div id='innerMessage'>O Wins</div>";
  } else if (board[0][2] == 'X' && board[1][2] == 'X' && board[2][2] == 'X') {
    document.getElementById("winMessage").innerHTML = "<div id='innerMessage'>X Wins</div>";
  } else if (board[0][2] == 'O' && board[1][2] == 'O' && board[2][2] == 'O') {
    document.getElementById("winMessage").innerHTML = "<div id='innerMessage'>O Wins</div>";
  }
  return true;
}


function diagonalWin() {
  // Possible diagonal wins
  if (board[0][0] == 'X' && board[1][1] == 'X' && board[2][2] == 'X') {
    document.getElementById("winMessage").innerHTML = "<div id='innerMessage'>X Wins</div>";
  } else if (board[0][0] == 'O' && board[1][1] == 'O' && board[2][2] == 'O') {
    document.getElementById("winMessage").innerHTML = "<div id='innerMessage'>O Wins</div>";
  } else if (board[0][2] == 'X' && board[1][1] == 'X' && board[2][0] == 'X') {
    document.getElementById("winMessage").innerHTML = "<div id='innerMessage'>X Wins</div>";
  } else if (board[0][2] == 'O' && board[1][1] == 'O' && board[2][0] == 'O') {
    document.getElementById("winMessage").innerHTML = "<div id='innerMessage'>O Wins</div>";
  }
  return true;
}

function checkForWin() {
  horizontalWin();
  verticalWin();
  diagonalWin();
  return true;
}

function ticTacToe(row, column) {
  if (board[row][column] === ' ') {
    switch (playerTurn) {
    case 'X': 
      board[row][column] = playerTurn;
      let letterX = document.getElementById('b'+row+column);
      letterX.innerHTML = 'X';
      checkForWin();
      playerTurn = 'O';
      break;
    case 'O':
      board[row][column] = playerTurn;
      let letterO = document.getElementById('b'+row+column);
      letterO.innerHTML = 'O';
      checkForWin();
      playerTurn = 'X';
      break;
    }
  } else {
    ticTacToe();
  }
}
//reset game via page reload
//update later
function reloadFunction() {
  location.reload();
}
