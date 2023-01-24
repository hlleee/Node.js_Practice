const express = require('express');
const app = express()

app.get('/', (req,res) => {
    res.send('Hello world!');
}) ;

//http 모듈의 res 객체의 메서드 write() 대신에 express의 res 객체의 send() 메서드를 통해 문자열 데이터를 전달함

app.listen(8080, () => {
    console.log('8080포트에서 서버 실행중');
})



//$npm install express
//$npm install -D nodemon
