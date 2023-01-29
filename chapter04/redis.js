/* redis version 3.1.2 */
/* npm install redis@^3.1.2 */

const redis = require('redis');
const client = redis.createClient(6379, '127.0.0.1'); //client에 redis 서버를 담아줌
//createClient 인자는 reids서버를 연결할 포트와 도메인.


//get함수를 사용하여 인자를 ('얻고싶은 값의 키',(콜백함수1,2))
//이 콜백함수의 두번째 인자에 내가 원하는 값이 들어오게 된다.
client.get('myKey', (err, value) => {
    console.log(value);
    
});



/* if redis version over 4 */
// async function run(){
//     await client.connect()
// }

// run();

// async function getVal(key){
//     const item = await client.lRange(key, 0, -1);
//     console.log(item);
// }

// getVal("myKey");
