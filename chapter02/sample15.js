//Prototype Chaining

const animal = {
    leg: 4,
    tail: 1,
    say() {
        console.log("HI");
    }
}

const dog = {
    sound: 'Wang',
    happy: true
}

dog.__proto__ = animal;

const cat = {
    sound: 'Neow'
}

cat.__proto__ = dog;

console.log(cat.happy); //true
console.log(cat.leg); //4

//-> cat에는 happy 프로퍼티가 없으므로 프로토타입인 dog와 프로퍼티에서 찾고
//cat에 leg 프로퍼티가 없고 프로토타입인 dog에도 없으니 dog의 프로토타입인 animal에서 찾는다.

