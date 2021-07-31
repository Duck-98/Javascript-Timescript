const myIterable = {};

myIterable[Symbol.iterator] = function (){
    let i = 1;
    while(i<=100){
        yield i++;
    }
};
// next가 없지만 for of가 이터레이션 프로토콜을 준수하는 문이기 때문에 next가 숨겨져있다.
for(const n of myIterable){
    console.log(n);
}