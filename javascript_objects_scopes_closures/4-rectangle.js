#!/usr/bin/node
class Rectangle {
    constructor(w, h) {
        if (w > 0){
            if (h > 0) {
                this.width = w
                this.height = h
            }
        }
    }

    print(){

        for (let j = 0; j < this.height; j++)
        {
            for(let i = 0; i < this.width; i++) {
                process.stdout.write("X" + "");
            }
            console.log()
        }
    }

    double(){

        this.width = this.width * 2
        this.height = this.height * 2
    }

    rotate(){

       let y = this.height
       let x = this.width
       this.width = y
       this.height = x
    }
}

module.exports = Rectangle