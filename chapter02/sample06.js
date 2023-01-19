//클로저의 개념

function outer() {
    var a = 'A';
    var b = 'B';

    function inner() {
        var a = 'AA'
        console.log(b);
    }
    return inner;
}

var outerFunc = outer();
outerFunc(); //B

//-> inner()함수의 스코프가  outer()함수의 스코프를 참조하고 있고 outer()의 실행이 끝나고 소멸된 후에도 내부 함수가 바깥함수의 스코프에 접근할 수 있도록 하는것을 클로저라고 한다.

