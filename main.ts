class Animal {
    private name: string;

    constructor(theName: string) {
        this.name = theName;
    }

    walk(distance: number) {
        console.log("Hi, my name is " + this.name + " and I'm walking " + distance + " meter");
    }
}

let myAnimal = new Animal("Phoc");
myAnimal.walk(10);

class Snake extends Animal{
    /**
     *
     */
    constructor(theName: string) {
        super(theName);
    }

    walk(distance:number){
        console.log("Snakes dont really walk");
    }
}