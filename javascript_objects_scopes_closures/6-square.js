const square = require('./5-square')

class Square extends square{

    charPrint(c){

        if (c === undefined){
            for (let j = 0; j < size; j++)
            {
                for(let i = 0; i < size; i++) {
                    process.stdout.write("X" + "");
                }
                console.log()
            }
        }

        else {
            for (let j = 0; j < size; j++)
            {
                for(let i = 0; i < size; i++) {
                    process.stdout.write(c + "");
                }
                console.log()
            }
        }
    }
}

module.exports = Square