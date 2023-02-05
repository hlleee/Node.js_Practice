//http 프로토콜과 ws 프로토콜

const wss = new WebSocket.Server({port:8080});

wss.on('connection', function connection(ws) {
    ws.on('message', function incoming(message) {
        console.log('received: %s', message);
    });
    ws.send('something');
});
