const person ={
    name : 'duck',
    age : 40,
    getAge(){
        return this.age;
    }
}
person.age;
person.getAge();

const age = person.getAge;

age();
//age의 소유자를 알 수 없기 때문에 호출했을 때 값을 받을 수 없다.

age.call(person);
// call을 이용한 후 person이라는 컨텍스를 확실히 지정해주면 값을 받을 수 있다.

class Person{
    name : string;
    age : number;
    constructor(name : string , age:number){
        this.name = name;
        this.age = age;
        this.getAge = this.getAge.bind(this);
         //bind 함수는 getAge에게 this가 언제 어디서 호출이 되든
         //소유자가 확인이 되지 않아도 이 this로 고정시켜주는 역할을 해줌. (call 사용 필요 x)
    }

    getAge(){
        return this.age;
    }

    getName = () => this.name;
     // lexical 컨텍스트(에로우 함수)를 이용하여 this를 고정시켜줌.(call 사용 필요 x)
}

const p1 = new Person('duck', 30);

p1.getAge();

const myAge = p1.getAge;

myAge();
p1.getName();

const x = p1.getName();