function workP(sec) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('workP function');
        }, sec * 1000);
    });
}

async function asyncFunc() {
    const result_workP = await workP(3); //workP(3) 함수가 완료되기 전까지 밑의 구문은 실행하지 않음
    console.log(result_workP);
    return 'async function';
}

asyncFunc().then((result) => {
    console.log(result)
});

//await의 사용법은 async 키워드를 붙인 함수 안에 lock을 걸어 놓고 싶은 부분에 await를 붙이면됨.
//원래 workP() 함수는 setTimeout() 함수를 이용하여 비동기적으로 처리되지만
//await를 붙여 workP(3) 함수가 완료되기 전까지 그 밑의 구문은 실행하지 않게 됨.


//결과
// workP function
// async function

