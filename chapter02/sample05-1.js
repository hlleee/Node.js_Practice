//const와 let의 특징

const puppy = "cute";
//puppy = "so cute!!"; //TypeError: Assignment to constant variable. 
//-> const는 값을 재할당할 수 없어 값 변경 불가함

let dog;
console.log(dog);//undefined

dog = "so lovely";
console.log(dog);//so lovely