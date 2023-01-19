//사용자 정의 함수의 동기 처리
function fakeSetTimeout(callback) {
    callback();
}

console.log(0);

fakeSetTimeout(function () {
    console.log('Hello');
});

console.log(1);

//인자로 콜백함수를 받아 실행해주는 함수
//사용자 정의 함수를 이용하면 코드가 동기적으로 처리됨
//위 코드가 동기적이려면 Hello 출력 후 1이 출력
//결과
// 0
// Hello
// 1

//sample20.js
//API의 비동기적 처리
console.log(0);

setTimeout(function() {
    console.log('Hi');
},0);

console.log(1);

//setTimeout() 함수는 웹브라우저에서 제공하는 API임.
//setTimeout() 함수는 인자로 콜백함수와 얼만큼 딜레이 할건지 넘겨주는데 딜레이를 0초로 주었음에도 비동기적으로 처리됨
//즉, setTimeout()에 인자로 넘겨준 콘솔이 비동기적으로 처리되고
//해당 코드의 작업은 0초 뒤에 setTimeout()을 콜백 큐에 넣게됨.
//콜스택에 있는 작업이 모두 끝난 후 이벤트 루프가 콜백큐에 있는 작업을 살펴보고 작업을 콜스택에 올려 실행함

//결과
// 0
// 1
// Hi

//따라서, 잡스 내부에서 처리되는 연산이면(fakeSetTimeout() 함수) 동기적, 외부에서 처리되는 연산이면(setTimeout() 함수) 비동기적으로 처리됨