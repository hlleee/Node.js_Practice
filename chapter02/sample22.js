//Promise의 사용

function workP(sec) {
    //Promise의 인스턴스를 반환하고
    //then에서 반환한 것을 받는다.
    return new Promise((resolve, reject) => {
        //Promise 생성시 넘기는 callback = resolve, reject
        //resolve 동작 완료시 호출, 오류 났을 경우 reject
        setTimeout(() => {
            resolve(new Date().toISOString());
        }, sec * 1000);
        
    });
}

workP(1).then((result) => {
    console.log('첫 작업', result);
    return workP(1);
}).then((result) => {
    console.log('둘째 작업', result);
});
//첫번째 then()이 끝나야 두번째 then()을 받기 떄문에 비동기 처리 방식.