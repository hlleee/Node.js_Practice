//사용자 정의 오류
//비동기 상황에서의 예외 처리
//오류 vs 예외
//오류는 복구하기 쉽지않은 심각한 오류이고, 예외는 발생하더라도 수습 가능한 정도의 심각하지 않은 오류를 말함
//예외 처리 : 함수를 정의할 때 그 규칙에서 어긋나는 것에 대한 처리

//문제 - 두 개의 숫자 인자를 받아 그 합을 출력함
//+ 원하는 두개의 인자 타입이 'number'가 아닐경우 throw를 통해 예외를 발생시킴.
function sum(a,b) {
    if (typeof a !== 'number' || typeof y !== 'number') {

        throw 'type of arguments must be number type';
    }
    console.log( a + b );
}

sum(1, '4');


