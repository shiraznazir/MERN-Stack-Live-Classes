class Human{

    static listing = []

    constructor(name){
        this.name = name;
        this.alive = true;
      //  Human.listing.push(this);
    }
    dance = function() {
        console.log(this.name + " is dancing.");
    }
    static kill_shooter = function(human1, human2, target){
        if(human1.alive && human2.alive){
            if(target instanceof Shooter && target.alive ){
                console.log(`${human1.name} and ${human2.name} is killed by ${target.name}`)
            }
        }
    }
}
class Shooter extends Human{
    constructor(name){
        super(name);
        this.kills = 0;
    }
    kill  = function(target){
        if(!this.alive){
            console.log(this.name, "is dead , can not be killed.")
            return;
        }
        if(this === target){
            console.log(`Hello, ${this.name}, Suicide isa never be an option.`);
            return;
        }
        if(target.alive){
            target.alive = false;
            console.log(this.name, " killed ", target.name);
            this.kills += 1;
        } else {
            console.log(this.name," is already dead.")
        }
    }

}

let ravi = new Human("Ravi kumar vimal");

let anuj = new Human("Anuj garg");

let rohan = new Shooter("Rohan tripathi");

Human.kill_shooter(ravi, anuj, rohan);

console.log(Human.listing)