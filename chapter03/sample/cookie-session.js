//세션을 통한 키 값 생성
//세션 : 실제 정보는 서버에만 저장해두고 브라우저에는 암호화된 키 값만 보내고
// 그 키값으로 실제 값에 접근할 수 있도록 하는 것.

const http = require('http');

const session = {};
const sesskey = new Date();
session[sesskey] = { name : 'hllee'}; //session 객체에 sesskey라는 키값 지정.할당.

http.createServer((req,res) => {
    res.writeHead(200, { 'Set-cookie': `session=${sesskey}` });
    res.end('Session-Cookie --> Header');
})
    .listen(8080, () => {
        console.log('8080포트에서 서버 연결중..');
    });

//세션 저장용 객체를 session 변수에 생성하고, 키 값을 sesskey라는 변수에 생성함.
