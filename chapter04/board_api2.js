//게시판에 uuid-apiKey 추가하기

const morgan = require('morgan'); //
const url = require('url');  //url을 파싱하기 위해 url모듈 불러옴
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
const key = {   //발급받은 api키를 담은 전역변수 key
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
//:apikey/ 부분에 들어온 값으로 api key 겁사를 한다.
//.isAPIkey(apiKey)와 .check(apiKey, key.uuid)를 통해 서버가 발급한 키가 맞는지 확인
//:type에는 어떤 정보를 이용해 게시글을 검색할지 담아줌.
app.get('/board/:apikey/:type', (req,res) => {
    let { type, apiKey} = req.params;
    const queryData = url.parse(req.url, true).query;   //.query는 무엇인가
    //url 모듈의 parse() 함수로 요청 쿼리스트링 queryData변수에 넣어줌

    //:type 부분에 들어갈 search,user 일때의,,,
    if (uuidAPIkey.isAPIkey(apiKey) && uuidAPIkey.check(apiKey, key.uuid)){
        if (type === 'search') {  //키워드로 글 검색
            const keyword = queryData.keyword;
            const result = boardList.filter((e) => { //keyword가 포함되어 있다면 해당 오브젝트를 result에 넣어 응답으로 보내줌
                return e.title.includes(keyword)    //includes()는 keyword값이 title에 포함되어 있는지 확인
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

