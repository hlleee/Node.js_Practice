// 함수의 선언

function add(a, b) {
    return a + b;
}

console.log(add(1,4)); //5

//sample11.js
//화살표 함수의 선언
//function 대신 화살표 함수인 => 로 선언 가능
const addd =( a, b ) => {
    return a + b;
}
//const addd = (a,b) => a+b;
//함수 내에 리턴밖에 없다면 위처럼 사용 가능

console.log(addd(1,5)); //6

//sample12.js
//this의 사용

var people = {
    name: 'hllee',
    say: function () {
        console.log(this);
    }
}

people.say(); //{name: 'hllee', say: ƒ}

var sayPeople = people.say;
sayPeople(); //전역(Global)을 호출한 객체가 되므로 이것의 this는 전역 객체가 된다.

var sayPeople = people.say.bind(people); //{name: 'hllee', say: ƒ}
sayPeople();
//-> this를 고정하고 싶다면 bind(this로 고정시킬 객체) 함수를 이용하면 됨.
