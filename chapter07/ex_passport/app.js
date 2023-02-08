const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
const Localstrategy = require('passport-local').Strategy;
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
//passport는 세션을 내부적으로 사용하기 때문에 반드시 세션을 활성화하는 코드
//passport.initialize(): passport를 미들웨어로 사용하겠다고 알려주는 초기화 부분.
app.use(passport.initialize()); //passport 초기화
// passport.session(): express 세션을 내부적으로 사용하겠다는 의미
app.use(passport.session()); //passport session 연동

// 세션 처리(1)
//passport.serializeUser(): 로그인에 성공했을 경우 딱 한번 호출되어 사용자의 식별자를 session에 저장
passport.serializeUser(function (user, done) {
    console.log('serializeUser', user);
    //호출된 사용자의 식별자를 session 객체에 어떻게 저장할지 done()메서드를 텅해 설정함.
    //done()에 호출된 두번째 인자 user.username은 식별자로서, 세션 객체(req.session)에 저장됨.
    // 그리고 user.username가 deserializeUser의 첫 번째 매개변수로 이동
    done(null, user.username); 
});

//세션 처리(2)
//deserializeUser(): 로그인 후 페이지 방문마다 사용자의 실제 데이터 주입시킴.
passport.deserializeUser(function (id, done) { //// 매개변수 id는 serializeUser의 done의 인자 user.username를 받은 것
    console.log('deserializeUser', id);
    done(null, fakeUser); //req.user에 전달
});

passport.use(new Localstrategy(     //Localstrategy 인스턴스 생성.//local 전략을 세움
    //콜백함수로 사용자가 등록한 username,password를 검사
    function (username, password, done) {
        if(username === fakeUser.username) {
            if(password === fakeUser.password) {
            //serializeUser를 통해 저장된 세션객체(req.session)에 있는 사용자의 식별자를 사용자가 페이지를 이동할때마다 조회하고
            //done()을 통해 조회한 실제 데이터(fakeUser)를 req.user에 담아줌
                
                //index.html의 form으로부터 받아온 정보가 모두 일치한다면
                return done(null, fakeUser)
            } else { //일치하지 않는다면,
                return done (null, false, { message: "password incorrect"});
            }
        } else {
            return done(null, false, {message: "username incorrect"});
        }
    }
));

//로그인에 성공하고 메인 페이지로 이동했다면 자동으로 deserializeUser가 호출되고,
//우리는 로그인 한 사용자를 req.user를 통해 접근할 수 있다.


/* 라우터 설정 */
app.get('/', (req, res) => {
    
    if(!req.user) { //로그인을 아직 하지 않았을 때
        res.sendFile(__dirname + '/index.html');
    } else {    //로그인 성공 시 세션에 req.user 저장.
        const user = req.user.username;
        const html = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
            <p>${user}님 안녕하세요!</p>
            <button type="button" onclick="location.href='/logout'">
            Log Out</button>
        </body>
        </html>
        `
        res.send(html);
    }
    
});


//passport Login : strategy-Local
//Authenticate Request
app.post('/login',

//첫번째 인자로 local을 넣어주어 local 전략을 사용할것이라는걸 알려줌
//두번째 인자는 로그인에 실패할 경우 /login 라우터로 이동하도록!
passport.authenticate('local', {failureRedirect: '/'}), 
function (req,res) {
    //성공했을 경우 메시지 띄움
    res.send('Login success..!')
});

app.get('/logout', function (req, res) {
    //passport가 알아서 req 객체에 logout() 메서드를
    req.logout();
    res.redirect('/');
});


// /* 404 에러처리 */
app.use((req, res, next) => {
    const error = new Error(`${req.method} ${req.url} 해당 주소가 없습니다.`);
    error.status = 404;
    next(error);
});

/* 에러처리 미들웨어 */
app.use((err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.error = process.env.NODE_ENV !== 'development' ? err : {};
    res.status(err.status || 500);
    res.send('error Occurred');
});

/* 서버와 포트 연결.. */
const server = app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 서버 실행 중 ..')
});
