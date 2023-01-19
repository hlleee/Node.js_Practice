//프로토타입을 클래스처럼 사용하기

function Animal() { }

Animal.prototype.legs = 4;
Animal.prototype.tail = 1;

const dog = new Animal();
const cat = new Animal();

//클래스 대신 function과 new를 통해 클래스를 흉내 가능
//[객체.prototype.속성키 = 속성값]을 통해 객체를 공유하여 사용할수있음.
//프로토타입을 사용해 공간을 절약.