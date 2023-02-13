//실시간 채팅창 구현하기

const http = require("http");
const express = require("express");
const app = express();

app.use(express.static(__dirname)); 

const server = http.Server(app); //서버 생성
const io = require("socket.io")(server); //http,server,express 을 io 변수에 담아.
let users = [];

server.listen(8080, () => {
    console.log("8080포트에서 서버 실행 중...");
});

//라우터 설정
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

//socket.io를 통해 connection 만드는 코드.총 3개의 이벤트 생성 - [ connection/disconnect/has disconnected ]
//ioi.on(): connection 생성
io.on("connection", (socket) => { //함수 socket,dl .on()을 만든것. 기능을 지정함 방금.
    let name = "";
    //socket.on(): 이벤트 감지
    socket.on("has connected", (username) => { // 이벤트 : has connected
        name = username; ///name에username을 저장
        users.push(username); //users에 username의 정보 넣기.
        io.emit("has connected", { username: username, usersList: users }); //emit(): 이벤트를 다른쪽으로 전달하고 싶을 경우
        //username과 usersList에 각 값 넣어줌
    });

    //연결이 안되었을 때
    socket.on("disconnect", () => { // 이벤트 : has disconnected
        users.splice(users.indexOf(name), 1);
        io.emit("has disconnected", { username: name, usersList: users });
    })

    socket.on("new message", (data) => { // 이벤트 : new message
        io.emit("new message", data); // 모든 소켓에 메세지를 보냄
    });
});

