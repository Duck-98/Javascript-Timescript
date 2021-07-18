// 함수 -> 코드를 묶어 계산을 할 수 있게 해주는 것.

const { GeneratedIdentifierFlags } = require('typescript');

function myFn(x){
    
    return  x + 100;
} // 함수를 만들 때 가변인자(arguments)를 통해 인자가 없는 경우, 인자가 여러 개 들어오는 경우를 설계해놔야함.

function sum(a,b...args){ // ... -> 몇 개가 들어올지 모른다는 의미. args = arguments(arguments 전개 파라미터)
    let s = 0; // 인자값  a,b는 필수 값이며 그 뒤는 줘도 되고 안줘도 된다.
    for(let i = 0; i < arguments.length; i++){
        s = s+ arguments[i];
    } //arguments에는 호출 받은 인자들이 들어가있으므로 함수를 사용할 때 인자를 따로 입력하지 않아도 됨.
    return s;
}

const addSum = sum(10,20,30);

const result = myFn(10);
// result 110
const myFnV2 = function (){
    return 100;
}; // 함수를 변수안에 넣어 호출할 수 있게 해줌.
// 자바스크립트는 함수를 값으로 취급함. 
const arr = [10,20,30,40,50]
myFnV2();
myFnV2.call(null,10,20,30);
myFnV2.apply(null,arr);
// call, apply 의 공통점 = 첫번째 인자로 context를 받음.
// call은 인자를 바로 받지만 apply는 배열에 담아서 인자값을 전달받는다.
// 인자의 개수가 많거나 인자값을 수정해야할 때, call은 일일히 타이핑을 이용하여 수정해야하지만, apply는 배열변수의 값만 수정하면 되기때문에 유용하다.

(function(){
  console.log('즉시 실행 함수실행');  
})(); // 즉시 실행함수( 1회성 호출 , 단 한번만 실행되어야 하는 함수인 경우 사용함.)

//화살표함수 ( 이름이 기본적으로 없고 익명함수이다. 그렇기 때문에 변수를 이용해서 사용해야한다.)
const sumV2 = (a,b,...args) => {
   let s = 0; // 인자값  a,b는 필수 값이며 그 뒤는 줘도 되고 안줘도 된다.
    for(let i = 0; i < arguments.length; i++){
        s = s+ arguments[i];
    } //arguments에는 호출 받은 인자들이 들어가있으므로 함수를 사용할 때 인자를 따로 입력하지 않아도 됨.
    return s;
}; 

const ten = x => 100 + x;
// 화살표함수는 코드가 1줄이고 그 결과를 리턴한다면 {}를 생략할 수 있고 인자가 1개라면 ()도 생략할 수 있다.

// generator(생성기) 함수
function* gen(){
  yfield 10;
  yfield 20;
  return 30;  
}
// 어려운 개념) 한 줄 실행하고 나가고 다음줄 실행하고 나가고를 반복.

const g = gen();
g.next(); // generator함수를 실행하기 위해서는 위와같은 방법으로 해야함.
g.next();
g.next();

//비동기 함수
async function myTask(){
    
}
