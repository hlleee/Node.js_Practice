const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const cookieParser = require('cookie-parser');
const passport = require("passport");
const LocalStrategy = require("passport-local");
const socket = require("socket.io");
const dotenv = require("dotenv");
const flash = require("connect-flash"); //flash 메시지란, 한번 출력되고 사라지는 메시지.
const Post = require("./models/Post");
const User = require("./models/User");

const port = process.env.PORT || 3000;
//채팅 기능을 위해 user의 정보를 담을 conlineChatUsers라는 객체 변수 할당.
const conlineChatUsers = {};

//dotenv를 통해 .env 파일의 변수를 사용할 수 있게 해주는 config() 메소드 호출.
dotenv.config();

const postRoutes = require("./routes/post"); //게시글 관련 라우터
const userRoutes = require("./routes/users"); //사용자 관련 라우터
//const { next } = require("cheerio/lib/api/traversing");
const app = express(); 

app.set("view engine", "ejs"); //ejs를 사용해 view를 구성할거라고 알림.

//미들웨어
app.use(cookieParser(process.env.SECRET))
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false
})
);

app.use(flash()); 

//passport setup
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//미들웨어
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

//몽고디비 연결
mongoose
    .connect("mongodb://127.0.0.1:27017/facebook-clone", {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    })
        .then(() => {
            console.log("Connected to MongoDB");
        })
        .catch((err) => {
            console.log(err);
        });

//Template 파일에 변수 전송
app.use((req,res,next) => {
    res.locals.user = req.user;
    res.locals.login = req.isAuthenticated();
    res.locals.error = req.flash("error");
    res.locals.success = req.flash("success");
    next();
});

//라우터 - 라우터 장착 및 서버 연결.
app.use("/", userRoutes);
app.use("/", postRoutes);

const server = app.listen(port, () => {
    console.log("App is running on port " + port);
});

//WebSocket setup
const io = socket(server);

const board = io.of("/chat");
board.on("connection", socket => {
    console.log("new user : ", socket.id);

    board.emit("newUser", { socketID: socket,id });

    socket.on("newUser", data => {
        if,,,
    })
})


