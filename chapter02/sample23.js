//async/await
//Promise 객체와 async/await 
//async/await를 사용하면 new Promise 로 프로미스 객체를 선언하고 
//resolve/reject를 넘겨주는 부분을 숨겨주어 코드 양 감소!
//try/catch 를 통해 오류 다루고 중첩현상 해결 가능!

function workP(sec) { //Promise로 구현된 함수
 
    return new Promise((resolve, reject) => {
        
        setTimeout(() => {
            resolve(new Date().toISOString());
        }, sec * 1000);
        
    });
}

function justFunc() { //일반 함수
    return 'just Function';
}

async function asyncFunc() { //async를 사용한 함수
    return 'async Function';
}

console.log(justFunc()); //just Function
console.log(asyncFunc()); 
//Promise {[[PromiseState]]: 'fulfilled', [[PromiseResult]]: 'async Function', Symbol(async_id_symbol): 7, Symbol(trigger_async_id_symbol): 1}
console.log(workP());
//Promise {[[PromiseState]]: 'pending', [[PromiseResult]]: undefined, Symbol(async_id_symbol): 8, Symbol(trigger_async_id_symbol): 1}

//-> asyncFunc()와 workP() 함수는 Promise객체를 반환하여 then() 사용 가능
