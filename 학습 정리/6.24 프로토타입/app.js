const c1 = {
    name : 'c1',
    color : 'red',
};
 
const c2 ={
    name : 'c2',
    width : 300,
};

const c3={
    name : 'c3',
    height : 100,
};

console.log(c1,c2,c3);

c1.__proto__ = c2;


console.log( c1);
console.log(c2);
console.log(c3);

console.log(c1.width); //300
//c1에 width가 없지만 객체의 프로토 연결로 인해 c2의 값을 c1에서 찾을 수 있게 된다.

function Foo(name){
    this.name = name;
}
Foo.prototype.lastName = 'Woowa';
// 함수의 프로토타입 -> 
// new 연산자를 통해 함수의 인스턴스 객체를 만들면 일반 객체 프로토타입을 코드로 연결해놓은 것을 
// 단순하고 간편하게 객체의 상속관계를 만들어준다.
const f = new Foo('na duck');
console.log(f.name);
