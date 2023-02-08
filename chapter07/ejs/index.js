const path = require('path');
const express = require('express');
const app = express();

app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', (req,res) => {
    res.render('index', {
        "People":
        [
            {
                "name": "Harin",
                "age" : "23"
            },
            {
                "name": "Hayeon",
                "age" : "23"
            },
            {
                "name": "Hambi",
                "age" : "23"
            }
        ]
        , title: "Express"
    });
});

app.listen(app.get('port'), () =>{
    console.log(app.get('port'), '번 포트에서 서버 실행중..')
});