const morgan = require('morgan');
const models = require('./models');

const express = require('express');
const app = express();

//포트 설정
app.set('port', process.env.PORT || 8080);

//공동 미들웨어
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded( { extended: true }));

//new_customer 테이블 정보 불러오기
app.get('/', (req,res,next) => {    //READ
    models.newCustomer.findAll() //findAll()함수는 모델 안 정보를 SELECT
    //findOne(),find() : 함수는 한개의 원하는 데이터만 읽어옴!
    //count(), findAndCount() : 함수도 READ 작업에 속함
    .then((customers) => {
        res.send(customers);
    })
    .catch((err) => {
        console.log(err);
        next(err);
    });
});

//customer.html 불러오기
app.get('/customer', (req,res) => {
    res.sendFile(__dirname + '/customer.html');
});

//테이블의 각 컬럼에 해당 값을 저장함!
app.post('/customer', (req,res) => {    //CREATE
    let body = req.body;

    models.newCustomer.create({
        name: body.name,
        age: body.age,
        sex: body.sex,
    }).then(result => {
        console.log('customer created..!');
    res.redirect('/customer');
    }).catch(err => {
        console.log(err);
    })
});

//서버 포트 연결
app.listen(app.get('port'), () => {
    console.log(app.get('port'),'번 포트에서 서버 실행 중..')
});