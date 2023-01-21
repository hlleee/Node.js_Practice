//아래의 order1,2를 보고 name. price 객체 속성을 가진 객체 생성자 MakeOrder()를 만들기
const order1 = new MakeOrder('오렌지 쥬스', '2500');
const order2 = new MakeOrder('토마토 주스', '3000');

//정답
function MakeOrder(name, price) {
    this.name = name;
    this.price = price;
}

console.log(order1);
console.log(order2);

const order3 = new MakeOrder('키위 주스', '3500');
console.log(order3);

//MakeOrder()라는 객체 생성자를 만들어야 객체 속성을 가진 order1,2를 생성할 수 있다.