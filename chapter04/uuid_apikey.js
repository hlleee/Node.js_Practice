//uuid-apikey 모듈 사용
//API를 이용할때 사용자마다 고유한 키를 발급해주고 등록된 키로 접근하는 사용자만 API를
//허용해줘야 하는데 사용자의 키를 DB에 넣고 관리하는 과정이 필요하므로
//아직 디비를 배우지 않은 우리는 uuid-apikey라는 모듈을 이용해
//메모리에 임시로 담아준다.

const uuidAPIkey = require('uuid-apikey');

console.log(uuidAPIkey.create());