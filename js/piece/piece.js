export class piece{

    constructor(color, row, col){

        this.color = color
        this.row = row
        this.col = col
    }

    getPiecename(){
        return `${this.color}_${this.constructor.name.toUpperCase()}`
    }

}

export class pawn extends piece{

    constructor(color, row, col){
        super(color, row, col)
    }

}

export class rook extends piece{

    constructor(color, row, col){
        super(color, row, col)
    }

}

export class knight extends piece{

    constructor(color, row, col){
        super(color, row, col)
    }

}

export class bishop extends piece{

    constructor(color, row, col){
        super(color, row, col)
    }

}

export class queen extends piece{

    constructor(color, row, col){
        super(color, row, col)
    }

}

export class king extends piece{

    constructor(color, row, col){
        super(color, row, col)
    }
    
}

