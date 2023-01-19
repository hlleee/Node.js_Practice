//일반적인 예외 처리

// catch 해주지 않은 부분은 실행되지 않음
function f2() {
    console.log('this is f2 start');

    //이 부분은 오류가 발생한 지점 이후의 콜스택에 쌓인 작업은 실행되지 않으므로 코드 실행 노노
    throw new Error('에러'); // Error 객체 - 해당하는 콜스택 정보가 담겨있다. 에러 객체 생성
    //오류 객체로 오류를 발생시키면 해당하는 콜스택 정보가 담겨있어 어떤 파일의 몇번째 줄에 오류가 생기는지 확인 가능.
    console.log('this is f2 end'); // 실행되지 않음.
}

function f1() {
    console.log('this is f1 start');

    try { //예외가 발생할 수 있는 부분을 트라이 함수 내에 넣는다.
        f2();

    } catch (e) { //예외를 어떻게 처리할 것인지 코드 작성. 후 처리
        console.log(e);
    }
    //그러면 콜스택에 쌓인 작업이 오류가 발생해도 중단되지 않고 모두 실행됨.
    console.log('this is f1 end');
}

f1();