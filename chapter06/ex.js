//ws 프로토콜 예시 코드

const WebSocket = require('ws');

const ws = new WebSocket('ws://www/host.com/path');

ws.on('open', function open() {
    ws.send('Something');
});

ws.on('message', function incoming(data) {
    console.log(data);
});