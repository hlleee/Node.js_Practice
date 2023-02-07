const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
const Localstrategy = require('passport-local').strategy;
const express = require('express');

const app = express();


/* 포트 설정 */
app.set('port', process.env.PORT || 8080);

//가상 데이터
let fakeUser = {
    username: 'test@test.com',
    password: 'test@1234'
}


/* 공통 미들웨어 */
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser('wsExample'));
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: 'passportExample',
    cookie: {
        httpOnly: true,
        secure: false
    }
}));


//passport 미들웨어
app.use(passport.initialize()); //passport 초기화
app.use(passport.session()); //passport session 연동

// 세션 처리 - 로그인에 성공했을 경우 딱 한번 호출되어 사용자의 식별자를 session에 저장
passport.serializeUser(function (user, done) {
    console.log('serializeUser', user);
    done(null, user.username);
});

/* 라우터 설정 */
// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/index.html');
// });



// /* 404 에러처리 */
// app.use((req, res, next) => {
//     const error = new Error(`${req.method} ${req.url} 해당 주소가 없습니다.`);
//     error.status = 404;
//     next(error);
// });

// /* 에러처리 미들웨어 */
// app.use((err, req, res, next) => {
//     res.locals.message = err.message;
//     res.locals.error = process.env.NODE_ENV !== 'production' ? err : {};
//     res.status(err.status || 500);
//     res.send('error Occurred');
// })

// /* 서버와 포트 연결.. */
// const server = app.listen(app.get('port'), () => {
//     console.log(app.get('port'), '번 포트에서 서버 실행 중 ..')
// });

// webSocket(server); // ws와 http 포트 공유