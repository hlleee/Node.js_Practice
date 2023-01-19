//Promise 객체 : 콜백지옥을 벗어나도록 도와주는 객체 
//-> 요청에 대한 응답이 준비되었을때 알림을 주는 알리미 역할!

//일반 비동기 함수
//각 작업마다 1초의 시간이 걸리는 일이 있을 때!
function work(sec, callback) {
    setTimeout(() => {
        callback(new Date().toISOString());
    }, sec * 1000);
};

work(1, (result) => {
    console.log('첫 번째 작업', result);
});

work(1, (result) => {
    console.log('두 번째 작업', result);
});

work(1, (result) => {
    console.log('세 번째 작업', result);
});

//-> 1초뒤에 첫,둘,세 번째 작업이 동시에 실행된다

//sample21-2.js
//동기적 처리(1)
work(1, (result) => {
    console.log('첫 번째 작업', result);

    work(1, (result) => {
        console.log('두 번째 작업', result);

        work(1, (result) => {
            console.log('세 번째 작업', result);
        });
    });
});

//-> 각 1초, 2초, 3초 뒤에 작업이 실행된다

//sample21-3.js
//동기적 처리(2)

work(1, (result) => {
    console.log('첫 번째 작업', result);

    work(1, (result) => {

        work(1, (result) => {
            console.log('세 번째 작업', result);
        });

        console.log('두 번째 작업', result);
    });
});
