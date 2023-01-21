console.log('First Console');

setTimeout(function() {
    console.log('Second Console');
}, 0);

 console.log('Third Console');

//결과
'First Console'
'Third Console'
'Second Console'

// : 비동기식으로 동작하는 코드이기 때문.


