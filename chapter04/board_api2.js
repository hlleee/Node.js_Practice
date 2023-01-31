//게시판에 uuid-apiKey 추가하기

const morgan = require('morgan');
const url = require('url');
const uuidAPIkey = require('uuid-apikey');

//express app generate
const express = require('express');
const app = express();

//포트 설정
app.set('port', process.env.PORT||8080);

//공동 미들웨어
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended:true }));

//테스트를 위한 API키
const key = {
    apiKey: '1XX2JA9-52FMAJG-JF5RMN2-PW3W2PE',
    uuid: '0f7a2929-289f-454a-93cb-8a54b707c159'
};

//테스트를 위한 게시글 데이터
let boardList = []; //게시판 리스트
let numOfBoard = 0; //게시판 개수

//라우팅 설정
app.get('/',(req,res) => {
    res.send('This is api.js');
});

//게시글 검색 API using uuid-key
app.get('/board/:apikey/:type', (req,res) => {
    let { type, apiKey} = req.params;
    const queryData = url.parse(req.url, true).query;   //.query는 무엇인가

    if (uuidAPIkey.isAPIkey(apiKey) && uuidAPIkey.check(apiKey, key.uuid)){
        if (type === 'search') {  //키워드로 글 검색
            const keyword = queryData.keyword;
            const result = boardList.filter((e) => {
                return e.title.includes(keyword)
            })
            res.send(result);
        }
        else if (type === 'user') { //닉네임으로 게시글 검색
            const user_id = queryData.user_id;
            const result = boardList.filter((e) => {
                return e.user_id === user_id;
            });
            res.send(result);
        }
        else {
            res.send('Wrong URL');
        }
    } else {
        res.send('Wrong API key');
    }
});

//서버와 포트 연결
app.listen(app.get('port'), ()=> {
    console.log(app.get('port'),'번 포트에서 서버 실행중');
});

