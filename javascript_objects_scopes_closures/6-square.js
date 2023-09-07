const square = require('./5-square')

class Square extends square{
    
    
    charPrint(c){


        if (c === undefined){

            super.print()
        }
        else {
        for (let j = 0; j < this.height; j++)
        {
            for(let i = 0; i < this.width; i++) {
                process.stdout.write(c + "");
            }
            console.log()
        }
    }
    }
}

module.exports = Square

