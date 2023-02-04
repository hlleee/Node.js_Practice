//index.js 수정
const Sequelize = require('sequelize');

//개발모드인지 테스트모드인지 담는 변수 env
const env = process.env.NODE_ENV || 'development'; 
//데이터베이스 정보가 담긴 config.json을 불러오는 config 변수 설정 
const config = require(__dirname + '/../config/config.json')[env]; 
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

db.sequelize = sequelize;
db.Sequelize = Sequelize; //이건 대문자임.

db.newCustomer = require('./customer')(sequelize, Sequelize);
db.newPurchase = require('./purchase')(sequelize, Sequelize);


//hasMany로 1:N 관계 설정을 위해 관계 맺어줌. 
db.newCustomer.hasMany(db.newPurchase, { foreignKey: 'customer_id', sourceKey:'id'});
//belongsTo은 1:1, belongsToMany는 N:M
db.newPurchase.belongsTo(db.newCustomer, { foreignKey: 'customer_id', sourceKey:'id'});

module.exports = db;

//자동으로 생성된 index.js 파일로 sequelize를 초기화하기 위한 내용
// 'use strict';

// const fs = require('fs');
// const path = require('path');
// const Sequelize = require('sequelize');
// const process = require('process');
// const basename = path.basename(__filename);
// const env = process.env.NODE_ENV || 'development';
// const config = require(__dirname + '/../config/config.json')[env];
// const db = {};

// let sequelize;
// if (config.use_env_variable) {
//   sequelize = new Sequelize(process.env[config.use_env_variable], config);
// } else {
//   sequelize = new Sequelize(config.database, config.username, config.password, config);
// }

// fs
//   .readdirSync(__dirname)
//   .filter(file => {
//     return (
//       file.indexOf('.') !== 0 &&
//       file !== basename &&
//       file.slice(-3) === '.js' &&
//       file.indexOf('.test.js') === -1
//     );
//   })
//   .forEach(file => {
//     const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
//     db[model.name] = model;
//   });

// Object.keys(db).forEach(modelName => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });

// db.sequelize = sequelize;
// db.Sequelize = Sequelize;

// module.exports = db;
