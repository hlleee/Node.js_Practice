//실행결과를 예측해보고 동기인지 비동기인지 생각하기.

console.log('First Console');

function fakeSetTimeout(callback, delay) {
    callback(); 
}

console.log('Second Console');

fakeSetTimeout(function() {
    console.log('Third Console');
}, 0);

console.log('Fourth Console');

//결과
'First Console'
'Second Console'
'Third Console'
'Fourth Console'