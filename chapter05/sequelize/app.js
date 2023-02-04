//테이블 관계 생성

//models/index.js에 있는 정보를 불러와 entity 정보를 읽고 sequelize에 적재함
const { sequelize } = require('./models/index.js');

const driver = () => {
    //sequelize.sync() 함수를 통해 테이블 생성
    //sequelize는 Promise를 반환하므로 then을 이요해 초기화 함.
    //sync() 함수를 통해 접근한 데이터베이스에 테이블간의 관계를 형성함
    sequelize.sync().then(() => {
        console.log('초기화 완료');
    }).catch((err) => {
        console.log('초기화 실패');
        console.log(err);
    });
};
driver();