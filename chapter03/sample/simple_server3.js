const http = require('http');

const server = http.createServer((req,res) => {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    res.write('<h1>Node.js로 서버 만들기</h1>');
    res.end('<p>3장 http모듈 공부 중입니다.</p>')
})
    .listen(8080);

//listening Event listener
server.on('listening', () => {
    console.log('8080포트에서 서버 연결중,,,');
});

//Error Event listener
server.on('error', () => {
    console.error(error);
})

//listen() 메서드에 콜백을 넣는 대신 listening 이벤트 리스너를 붙여 사용 가능
//오류가 발생해도 꼭 응답 콜백함수를 작성해주어야 함!