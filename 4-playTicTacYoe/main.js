let playTicTacToe = (symbol, cellNumber) => {

    if ((symbol == "x" || symbol == "o") && typeof cellNumber == "number" && board[cellNumber] == "z" && !isGameOver) {
        board[cellNumber] = symbol
        if (checkwinner(board)) {
            console.log("Winner is", symbol);
            console.log("Board Resetted");
            board = ["z", "z", "z", "z", "z", "z", "z", "z", "z"]
        }
        else if (isBoardFull) {
            console.log("DRAW");
            board = ["z", "z", "z", "z", "z", "z", "z", "z", "z"]
        }
    }
    else {
        if (symbol != "x" && symbol != "o") {
            console.log(symbol, cellNumber);
            console.log("Invalid Symbol");
        }
        else if (cellNumber > 9 || cellNumber < 0) {
            console.log("Invalid Cell Number");
        }
        else if (board[cellNumber] != "z") {
            console.log("Cell already filled");
        }
        else{
            console.log("Game Already Over");
        }
    }
    return board

}

let checkwinner = (board) => {
    if (board[0] == board[4] && board[4] == board[8] && board[4] != "z") {
        isGameOver = true
        return isGameOver
    }

    if (board[2] == board[4] && board[4] == board[6] && board[4] != "z") {
        isGameOver = true
        return isGameOver
    }

    if (board[0] == board[3] && board[3] == board[6] && board[3] != "z") {
        isGameOver = true
        return isGameOver
    }

    if (board[1] == board[4] && board[4] == board[7] && board[4] != "z") {
        isGameOver = true
        return isGameOver
    }

    if (board[2] == board[5] && board[5] == board[8] && board[5] != "z") {
        isGameOver = true
        return isGameOver
    }

    if (board[0] == board[1] && board[1] == board[2] && board[1] != "z") {
        isGameOver = true
        return isGameOver
    }

    if (board[3] == board[4] && board[4] == board[5] && board[4] != "z") {
        isGameOver = true
        return isGameOver
    }

    if (board[6] == board[7] && board[7] == board[8] && board[7] != "z") {
        isGameOver = true
        return isGameOver
    }

}

let BoardFull = (board) => {
    if (board[0] != "z", board[1] != "z", board[2] != "z", board[3] != "z", board[4] != "z", board[5] != "z", board[6] != "z", board[7] != "z", board[8] != "z", board[9] != "z") {
        isBoardFull = true
    }
}

var isBoardFull = false

var isGameOver = false;
var board = ["z", "z", "z", "z", "z", "z", "z", "z", "z"]

// playTicTacToe("x",0)
// playTicTacToe("x",3)
// playTicTacToe("o",6)
// playTicTacToe("o",7)
// playTicTacToe("o",8)

for (let index = 0; index < 9; index++) {
    console.log("iTERATION: ", index);
    console.log(playTicTacToe("x", index));
}