const Cell = require("./Cells");

class Board{
    constructor(){
        this.cells =[
        new Cell(),
        new Cell(),
        new Cell(),
        new Cell(),
        new Cell(),
        new Cell(),
        new Cell(),
        new Cell(),
        new Cell(),
    ]

    }
    
    isCellMarked(cellNumber){
        return this.cells[cellNumber].isEmpty()
    }

    getCellObj(cellNumber){
        return this.cells[cellNumber]
    }

    checkWinner(){
        console.log(this.printBoard());

        if(this.cells[0].mark==this.cells[1].mark &&
            this.cells[2].mark == this.cells[1].mark && !this.cells[1].isEmpty()){
                // console.log("here");
                return [this.cells[0].mark, "Winner"]
        }
        if(this.cells[3].mark==this.cells[4].mark &&
            this.cells[4].mark == this.cells[5].mark && !this.cells[4].isEmpty()){
                // console.log("object");
                return [this.cells[4].mark, "Winner"]
            }
        
        if(this.cells[6].mark==this.cells[7].mark &&
                this.cells[7].mark == this.cells[8].mark && !this.cells[7].isEmpty()){
                    // console.log("object");
                    return [this.cells[7].mark, "Winner"]
        }
        if(this.cells[0].mark==this.cells[3].mark &&
            this.cells[3].mark == this.cells[6].mark && !this.cells[3].isEmpty()){
                // console.log("object");
                return [this.cells[3].mark, "Winner"]
        }
        if(this.cells[1].mark==this.cells[4].mark &&
            this.cells[4].mark == this.cells[7].mark && !this.cells[4].isEmpty()){
                // console.log("object");
                return [this.cells[4].mark, "Winner"]
        }
        if(this.cells[2].mark==this.cells[5].mark &&
            this.cells[5].mark == this.cells[8].mark && !this.cells[5].isEmpty()){
                // console.log("object");
                return [this.cells[5].mark, "Winner"]
        }
        if(this.cells[0].mark==this.cells[4].mark &&
            this.cells[4].mark == this.cells[8].mark && !this.cells[4].isEmpty()){
                // console.log("object");
                return [this.cells[4].mark, "Winner"]
        }
        if(this.cells[2].mark==this.cells[4].mark &&
            this.cells[4].mark == this.cells[6].mark && !this.cells[4].isEmpty()){
                // console.log("object");
                return [this.cells[4].mark, "Winner"]
        }
        if(this.boardFull()){
            // console.log("inside full");
            // console.log("object");
            return ["","Draw"]
        }
        // console.log(this.printBoard());
        // console.log("object");
        return ["", ""]           
    }
    printBoard(){
        console.log(this.cells);
    }
    boardFull(){
        // console.log("inside boardfull fun");
        if(!this.cells[0].isEmpty() &&  !this.cells[1].isEmpty() &&!this.cells[2].isEmpty() &&!this.cells[3].isEmpty() &&!this.cells[4].isEmpty() &&!this.cells[5].isEmpty() &&!this.cells[6].isEmpty() &&!this.cells[7].isEmpty() &&!this.cells[8].isEmpty()){
            // console.log("inside true");
            return true
        }
        return false
    }
}

module.exports = Board