//customer 객체를 ORM으로 작성하기

module.exports = (sequelize, DataTypes) => {
    const newCustomer = sequelize.define("new_customer", { //테이블 이동
        name: { //컬럼 생성
            type: DataTypes.STRING(20), //데이터 타입 정의
            allowNull: false //null 허용 여부 정의
        }, 
        age: {
            type: DataTypes.INTEGER,
            allowNull: false 
        },
        sex: {
            type: DataTypes.STRING(10), 
            allowNull: false 
        },
        joined_date: {
            type: 'TIMESTAMP',
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
    }, {
        timestampes: false
    });
    return newCustomer;
}