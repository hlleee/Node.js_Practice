//purchase 모델 생성

module.exports = (sequelize, DataTypes) => {
    const newPurchase = sequelize.define("new_purchase", { //테이블 이동
        customer_id: { //컬럼 생성
            type: DataTypes.INTEGER, //데이터 타입 정의
            allowNull: false //null 허용 여부 정의
        }, 
        book_name: {
            type: DataTypes.STRING(20), 
            allowNull: false 
        },
        purchase_date: {
            type: 'TIMESTAMP',
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
    }, {
        freezeTableName: true,  //복수형으로 만들지 않으려고. 따로 설정하지 않아도 ㄱㅊ
        timestampes: false
    });
    return newPurchase;
}