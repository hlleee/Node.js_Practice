//미들웨어 사용법(2)

const express = require('express');
const app = express();

app.get('/', function (req, res, next) {
    res.send('Hello world!'); //next()가 없다면 여기서 응답을 종료함.
    next();
});

const myLogger = function (req,res, next) {
    console.log('LOGGED');
    next();
};

app.use(myLogger);

app.listen(8080);

//미들웨어는 위에서 아래로 실행되기 때문에 순서가 중요함
//app.get('/')이 수행되고 res.send()가 끝나고 응답을 종료하기 때문에 myLogger에 도달하지 않음
//next()는 다음 미들웨어로 넘어가는 역할을 해주어 흐름 제어 가능