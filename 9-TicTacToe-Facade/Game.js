const Board = require("./Board")
const Player = require("./player")

class Game{
    constructor(board,players){
        this.players = players
        this.board = board
        this.turn = 0
        this.isGameEnded = false
    }

    static newGame(player1Name,player2Name){
        if(typeof player1Name!="string"){
            return "Invalid Player1 Name"
        }
        if(typeof player2Name!="string"){
            return "Invalid Player2 Name"
        }
        // let turn = 0
        let boardForGame = new Board
        let player1 = new Player("x",player1Name)
        let player2 = new Player("o",player2Name)

        return new Game(boardForGame,[player1,player2])
    }
    play(cellNumber){
        // console.log(cellNumber);
        if(this.isGameEnded){
            return "Game has ended"
        }
        if(typeof cellNumber!="number"){
            return "Please Enter a number for cell number"
        }
        if(cellNumber>8){
            return "Cell number cannot be greater than 8"
        }
        if(cellNumber<0){
            return "Cell number cannot be less than 0"
        }
        let currentPlayer
        if(this.turn%2 == 0){
            currentPlayer = this.players[0]
        }
        else{
            currentPlayer = this.players[1]
        }
        if(!this.board.isCellMarked(cellNumber)){
            return "Cell already filled"
        }
        let cellObj = this.board.getCellObj(cellNumber)
        currentPlayer.markCell(cellObj)
        this.turn++

        let [symbolOfWinner, gameStatus] = this.board.checkWinner()
        if(gameStatus==""){
            return "Continue playing"
        }
        if(gameStatus=="Draw"){
            return "Game Ended as Draw"
        }
        if(symbolOfWinner==this.players[0].symbolOfWinner){
            return this.players[0].name + " Is winner"
        }
        this.isGameEnded = true
        return this.players[1].name + " Is winner"

    }
}

module.exports = Game