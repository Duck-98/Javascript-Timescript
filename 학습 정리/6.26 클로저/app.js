
function increment(){
    let saveNumber = 1;

    return  function(){
        return saveNumber++;
    } //보호되어야하는 값이 필요하다면 클로저 공간을 이용하여 하면 된다.
}

const inc = increment();

console.log(inc());
console.log(inc());
console.log(inc());
/*
만약 타입스크립트라면?
private을 이용하면 간편하게 값을 보호할 수 있다.
class MyObj {
    private saveNumber : Number;
}
*/
