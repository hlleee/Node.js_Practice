var puppy = "cute";
console.log(puppy); //cute

{//funtion-level-scope : 함수의 블록범위 내에서 선언한 변수는 함수 내에서만 인정하고 외부에서 선언한 변수는 모두 전역변수가 됨.
 //var는 funtion-level-scope로 전역변수에 원하지 않는 값을 덮어쓸 수 있음.
    var puppy="so cute";

}
console.log(puppy); //so cute


