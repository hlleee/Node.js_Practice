const http = require('http');

http.createServer((req,res) => {
    if (req.url === '/') {
        res.write('Hello');
        res.end()
    }
})
.listen(8080);

server.on('listening', () => {
    console.log('8080포트에서 서버 연결중,,,');
});

//req.url이  '/'라는 뜻은 localhost:8080/~ 의 뒤 주소를 뜻함.
