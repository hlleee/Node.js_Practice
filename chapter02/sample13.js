//프로토타입을 이용한 객체 생성
//프로토타입(prototype) : '원형'이라는 뜻으로 js로 객체 지향 프로그래밍을 할수있게 도와줌
//js는 클래스가 없으므로 프로토타입을 통해 비슷하게 흉내 냄.

function func() { };
console.log(func.prototype); //{constructor: ƒ}

func.prototype.name = 'hllee';
console.log(func.prototype); //{name: 'hllee', constructor: ƒ}

//js에서 기본 데이터 타입을 제외한 모든것이 객체인데, 이 객체의 원형인 프로토타입을 이용해 새로운 객체를 만들어내고 
//이렇게 생성된 객체가 또 다른 객체의 원형이 되어 새로운 객체를 생성 가능.
//콘솔로 확인해보면 내가 선언하지 않은 프로퍼티도 프로토타입 객체에 기본으로 저장되어 사용 가능함.