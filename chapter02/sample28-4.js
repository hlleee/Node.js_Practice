//async/await의 예외 처리(4)
async function myAsyncFunc() {
    consolejljalk.log(new Date()); //Uncaught
    const result = await wait(2).catch(e => {
        console.error(e);
    });
    console.log(new Date());
}

try { myAsyncFunc(); } catch (e) {} // ==> X
myAsyncFunc().catch(e); //==> O


//await 구문에서 .catch를 사용할 경우 주의사항
//- wait 함수가 resolve 힐때 catch하지 얂으므로 
//result에 wait의 resolve가 그대로 들어감
//따라서 wait 함수가 reject 할 때 catch 구문에서는 아무것도 반한하지 않으므로 undefined가 됨.