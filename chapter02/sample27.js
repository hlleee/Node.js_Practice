//비동기 처리 코드에서의 예외 처리는 
//비동기 작업이 바로 콜스택에 들어가는게 아니라 작업큐에서 대기 하다가 콜스택이 빌때 되면 콜스택으로 들어와 실행하므로
//예외가 발생하는 시점과 try가 싸고있는 시간이 일치하지 않아 try/catch문으로 오류를 잡지 못함.
//tyy() 함수 내에 예외가 발생할 수 있는 부분을
//catch() 함수 내에는 그 예외를 어떻게 처리할 수 있는지

//.catch() 이용하기
//


function wait(sec) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('error!');
        }, sec * 1000);
    });
}

wait(3).catch(e => {
    console.log('1st catch ', e);
});

/* chain은 같은 객체를 리턴할 때만 가능하다.*/
wait(3).catch(e => {
    console.log('1st catch ', e);
}) // wait함수의 에러를 받음
    .catch(e => {
        console.log('1st catch ', e);
    }); // 위 catch 구문의 상태를 받음. 에러를 잘 받았으므로 에러가 발생하지 X


/* chain 을 하고 싶을 땐. */
wait(3).catch(e => {
    console.log('1st catch ', e);
    throw e;
})
    .catch(e => {
        console.log('1st catch ', e);
    });

//.catch 구문은 원래 Promise구문의 .then() 처럼 체인잉 할수 없다,,,    

//.then() 이용하기
wait(3).then(() => {
    console.log('Success'); //성공했을 경우
}, e=> {
    console.log('Catch in Then', e ); //실패했을 경우
})

//성공했을 경우 - resolve, 실패했을 경우 reject로 나누어 처리해줄 수 있음.
