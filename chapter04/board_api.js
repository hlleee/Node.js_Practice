const morgan = require('morgan');

//express app generate
const express = require('express');
const app = express();

//포트 설정
app.set('port', process.env.PORT ||8080);

//공동 미들웨어
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

//테스트를 위한 게시글 데이터
let boardList = []; //게시판 리스트
let numOfBoard = 0; //게시판 개수

//라우팅 설정
app.get('/',(req,res) => {
    res.send('This is api.js');
});

//게시글 API//
app.get('/board', (req,res) => {
    res.send(boardList); ///board경로를 보낼때 boardList에 담았던 정보들을 보냄
});

app.post('/board',(req,res) => {
    const board = {     ///board 경로에 방문할대마다,,인가?
        "id": ++numOfBoard,
        "user_id":req.body.user_id,
        "date": new Date(),
        "title":req.body.title,
        "content":req.body.content
    };
    boardList.push(board);  //boardList에 board 데이터를 저장함

    res.redirect('/board'); ////board 경로를 새로고침
});

app.put('/board', (req,res) => {    //PUT : 데이터를 변경합니다(UPDATE).
    //req.params.id 값 찾아 리스트에서 삭제
    const findItem = boardList.find((item) => { //boardList에서 원하는것 찾기
        return item.id == +req.params.id
    });

    const idx = boardList.indexOf(findItem); //원하는 아이템의 인덱스 위치.
   //boardList의 요소 중 id 값이 req.params.id와 같은 요소가 있다면 이를 findItem에 저장하고
   //해당 요소를 splice함수로 제거해준다.
   boardList.splice(idx,1);
   //splice()함수는 첫번째 인자부터 두번째 인자까지의 인덱스만 남기고 나머지 요소를 없애는 함수임.

   const board = {     //리스트에 새로운 요소 추가
    "id": +req.params.id,
    "user_id":req.params.user_id, //req.params.user_id를 새로운 id로 한 새로운 게시글 데이터를 생성해 저장
    "date": new Date(),
    "title":req.body.title,
    "content":req.body.content
    };
    boardList.push(board);  //board라는 새로운 게시글 데이터를 boardList에 저장!

    res.redirect('/board');
});


//delete메서드로 /board/:id 요청이 들어오면 :id값과 동일한 boardList를 삭제하는 코드.
app.delete('/board/:id', (req,res) => { 
    //res.params.id 값 찾아 리스트에서 삭제
    const findItem = boardList.find((item) => { //찾기
        return item.id == +req.params.id
    });

    const idx = boardList.indexOf(findItem);
    boardList.splice(idx,1);

    res.redirect('/board');
});

//서버와 포트 연결
app.listen(app.get('port'), ()=> {
    console.log(app.get('port'),'번 포트에서 서버 실행중');
});

