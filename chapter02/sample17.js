//콜백함수의 비동기 처리

setTimeout(() => { // 내장함수 setTimeout(callback, delayTime)
    console.log('todo: First work!');
}, 3000);

setTimeout(() => {
    console.log('todo: Second work!');
},2000);

//결과 
//todo: Second work!
//todo: First work!

//->이벤트가 먼저 발생.

//sample18.js
//콜백함수의 동기 처리

setTimeout(() => { // 내장함수 setTimeout(callback, delayTime)
    
    setTimeout(() => {
        console.log('todo: Second work!');
    },2000);
    
    console.log('todo: First work!');
}, 3000);
//콜백함수를 이용해 비동기 작업을 동기적으로 처리했음.

