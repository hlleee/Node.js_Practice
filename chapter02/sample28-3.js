//async/await의 예외 처리(3)

function wait(sec) {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            //resolve가 없으므로 바로 reject로 넘어가 에러를 발생
            reject('throw Error!');
        }, sec * 1000);
    });
}

async function myAsyncFunc() {
    console.log(new Date());
    try {
        await wait(2); //Promise를 기다리는중,,,
    } catch (e) {
        console.log(e)
    }
    console.log(new Date());
}

const result = myAsyncFunc();

//myAsyncFunc() 함수 실행과 동시에 콘솔 출력.
//함수 실행 후 함수 wait에 2를 넣어 2초 뒤에 에러 메시지를 발생.
//에러 메시지 발생 후 약속한 2초 뒤에 콘솔창.
//동기적 처리 방식

