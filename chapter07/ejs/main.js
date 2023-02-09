//메뉴의 라우터를 index2.js에서 생성

const express = require('express');
const app = express();

app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views')
app.set('view engine', 'ejs');

//GET home page
//ejs 파일 render로 불러오기
app.get('/', function (req, res, next) {
    res.render('index2', { menu: "Home"});
});

app.get('/menu1', function (req, res, next) {
    res.render('index2', { menu: "Menu1" });
});

app.get('/menu2', function (req, res, next) {
    res.render('index2', { menu: "Menu2" });
});

app.get('/menu3', function (req, res, next) {
    res.render('index2', { menu: "Menu3" });
});

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 서버 실행중..');
});