//웹페이지 크롤링

const axios = require("axios");
const cheerio = require("cheerio");

const getHtml = async () => {
    try {
        //axios 모듈의 get() 함수를 이용해 로드북페이지의 html을 가져옴
        //이렇게 받은 데이터를 cheerio를 이용해 원하는 형태로 만들수있음
        return await axios.get("https://roadbook.co.kr/category/%EC%8B%A0%EA%B0%84%EC%86%8C%EA%B0%9C");
    } catch (error) {
        console.error(error);
    }
};

getHtml() //크롤링 할때 페이지의 코드 가죠오기.
    .then(html => {
        let ulList = []; //ul의 리스트 ulList에 담깊
        //받은 html 데이터를 cheerio 객체로 변환하고 $변수 안에 넣어준다.
        const $ = cheerio.load(html.data);
        //그 중에서도 원하는 부분을 $bodyList 변수 안에 담아준다.
        const $bodyList = $("div#searchList ol").children("li"); //div의 id가 searchList의 ol태그와 자식인 li태그.

        $bodyList.each(function (i, elem) { //.each()는 배열을 순환하며 콜백 함수를 실행하는 함수.
            //$bodyList의 각각의 요소를 돌며 ulList에 넣어주는 역할을 함.
            ulList[i] = {
                //find() 함수를 통해 <a>태그까지 지정해준뒤 text() 함수로 <a>태그 안에 텍스트만 뽑는다.
                bookList: $(this).find('a').text(),
                url: $(this).find('a').attr('href'), //attr() 함수는 해당 속성 안에 들어있는 텍스트를 뽑는 함수.
            };
        });

        const data = ulList.filter(n => n.bookList);
        return data;
    })
    //만들어준 ulList를 콘솔에 출력.
    .then(res => console.log(res));  
