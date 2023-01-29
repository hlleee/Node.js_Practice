//서버 테스트(2)
//Redis에 myKey:[1,2,3] 이라는 데이터를 저장하고 싶을 때

const redis = require('redis');
const client = redis.createClient(6379,'127.0.0.1');

client.push('myKey',0);
client.push('myKey',1);
client.push('myKey',2);