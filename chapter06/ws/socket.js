const WebSocket = require('ws'); // npm install -g ws@7.4.3

module.exports = (server) => {
    const wss = new WebSocket.Server({ server });

    wss.on('connection', (ws, req) => { // Connection Generate
        const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
        console.log('New Client : ', ip);
        ws.on('message', (message) => { // 클라이언트로부터 메세지
            console.log(message);
        });
        ws.on('error', (err) => { // 에러처리
            console.error(err);
        });
        ws.on('close', () => { // 종료
            console.log('클라이언트 접속 해제', ip);
            clearInterval(ws.interval);
        });

        ws.interval = setInterval(() => { // 서버에서 메세지
            if (ws.readyState === ws.OPEN) {
                ws.send('Message From Server.');
            }
        }, 3000);
    });
};


// const WebSocket = require('ws'); //ws 디렉터리 생성

// module.exports = (server) => {
//     //클라이언트가 요청을 보내면 WebSocket 객체 생성
//     const wss = new WebSocket.Server({ server });

//     wss.on('connection', (ws, req) => { //Connection
//         //Connection이 생성되면 req.headers와 req.connection.remoteAddress를 통해 사용자 IP 알아냄
//         const ip = req.headers['x-forwarded-for']||
//                     req.connection.remoteAddress;

//         console.log('New Client : ', ip);
//         //클라이언트가 보낸 메시지를 서버 콘솔에 띄움.
//         ws.on('message', (message) => {
//             console.log(message);
//         });
//         ws.on('error', (err) => {
//             console.error(err);
//         });
//         ws.on('close', ()=> {
//             console.log('클라이언트 접속 해제', ip);
//             clearInterval(ws.interval);
//         });

//         //setInterval 함수로 서버도 클라이언트에게 3초마다 메시지를 보냄
//         ws.interval = setInterval(() => {
//             //readyState로 연결상태 확인
//             if(ws.readyState === ws.OPEN) {
//                 ws.send('Message From Server.');
//             }
//         }, 3000);
//     });
// };