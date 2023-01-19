//객체와 프로퍼티

//'country'라는 나라 객체를 생성하고 나라의 특징을 '프로퍼티'로 정의하야 키-값 쌍으로 매핑하여 저장함.
//[ 키: '값' ]의 형태로 나타냄.
//get_name 처럼 객체 안에 함수가 있는 경우 메서드라고 함
const country = {
    names: "Korea",
    population: "524312",
    get_name: function() {
        return this.names;
    }
};

//sample08.js
//객체 배열 생성
const coffee = [];

coffee.push({ name: 'Americano' });
coffee.push({ name: "Latte" });

console.log(coffee); //[{…}, {…}]
console.log(coffee[0]); //{name: 'Americano'}
console.log(coffee.length); //2


//sample09.js
//구조 분해 할당
const animal = ['dog', 'cat'];

let [first, second] = animal;

console.log(first); //dog
console.log(second); //cat

//->객체나 배열을 변수로 간편하게 분해.

