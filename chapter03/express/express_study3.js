//미들웨어 사용법(1)
//서버가 요청 받을 때마다 LOGGED를 콘솔에 출력하는 코드.
//myLogger라는 미들웨어를 만들어 사용

const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send('Hello world!');
});

//미들웨어 myLogger
const myLogger = function (req,res) {
    console.log('LOGGED');
};

//app.use를 사용해 미들웨어 붙여주기. 이러면 요청이 들어올 때마다 myLogger를 반드시 거치게됨
app.use(myLogger);

app.listen(8080);