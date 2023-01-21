//다음은 동기식으로 동작하는 코드.
//여기서 work() 함수를 Promise 패턴으로 변경해볼 것.

// function work(sec, callback) {
//     setTimeout(() => {
//         callback(new Date().toISOString());
//     }, sec*1000);
// };

// work(1, (result) => {
//     console.log('첫작업', result);

//     work(1, result => {
//         console.log('둘째작업', result);
//     });
// });



//정답
function work(sec) {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
        resolve(new Date().toISOString());
        },sec * 1000);
    });
};

work(1).then((result) => {
    console.log('첫작업', result);
    return work(1);
}).then((result) => {
        console.log('둘째작업', result);
});

//.then()이란.