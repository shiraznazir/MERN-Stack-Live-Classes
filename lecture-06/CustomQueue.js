class Queue{
    
    #data = [];

    constructor(){
        this.size = 0;
    }

    push = function(value){
        this.#data.push(value);
    }

    delete = function(){
       return this.#data.pop(0);
    }

    front = function(){
        return this.#data[0];
    }
    
    empty = function(){
        return this.#data.length == 0;
    }

    display = function(){
        console.log(this.#data);
    }

    toString = function(){
        return String(this.#data);
    }   
}

let queue  = new Queue();

queue.push(10);
queue.push(20);
queue.push(30);
queue.push(40);
queue.push(50);

console.log(queue.toString())

console.log(queue.delete());
// console.log(queue.delete());
// console.log(queue.delete());
// console.log(queue.delete());
// console.log(queue.delete());
