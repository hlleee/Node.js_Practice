const animal = {
    leg: 4,
    tail: 1,
    say() {
        console.log("HI");
    }
}

const dog = {
    sound: 'Wang'
}

const cat = {
    sound: 'Neow'
}

dog.__proto__ = animal;
cat.__proto__ = animal;

console.log(dog.leg); //4
