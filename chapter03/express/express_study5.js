//오류처리를 위한 미들웨어 함수

const express = require('express');
const app = express();

app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Somethind broke!');
});

app.listen(3000);