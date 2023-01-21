//async/await의 예외 처리

async function myAsyncFunc() {
    return 'done';
}

const result = myAsyncFunc();
console.log(result); // Promise { <resolved>": 'done"}

// async 의 반환겂은 Promise 객체의 인스턴트.
//따라서 함수에서 오류가 발생하지 않고 실행에 성공할 경우 resolved의 프로퍼티가 반환됨