const http = require('http');

http.createServer((req,res) => {
    res.writeHead(200, {'Set-Cookie' : 'name=hllee'});
    console.log(req.headers.cookie);  
    //req.headers.cookie를 통해 쿠키 값에 접근 가능함.
    //req.headers.cookie는 문자열인데 js에서 사용하기 위해서는 파싱하는 과정이 필요함.
    res.end('Cookie --> Header');
})
    .listen(8080, () => {
        console.log('8080포트에서 서버 연결중..');
    });