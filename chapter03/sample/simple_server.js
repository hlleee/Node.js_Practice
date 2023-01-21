const http = require('http');

http.createServer((req,res) => {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    res.write('<h1>Node.js로 서버 만들기</h1>');
    res.end('<p>3장 http모듈 공부 중입니다.</p>')
})
    .listen(8080, () => {
    console.log('8080포트에서 서버 연결중,,,')
});

//.createServer(): 서버를 만드는 함수, 
//인자로 콜백함수를 넣고 콜백 함수에는 요청에 대한 응답
//즉, 어떤 이벤트를 받았을 떄 실행해야 하는 작업을 작성
//res.writeHead(): 응답에 대한 정보를 기록하는 함수
//res.write(): 파라미터로 클라이언트에 보낼 데이터를 넣어줌
//res.end(): 응답을 종료하는 메서드.