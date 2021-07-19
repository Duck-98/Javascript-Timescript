type MyObject ={
    name? : string;
    readonly age :number;
    getFamilyName : ()=> string;
    getLastName : () => string;
    getBloodType : () => string;
}
const obj = {
    name : 'duck',
    age : 40,
    getFamilyName: function(){
        return 'kim';
    }, //메소드 
    getBloodType(){
        return 'a';
    }, //위와 같이 줄여서 사용할 수 있음.
    getLastName : ()=> 'kim'
};
obj.name;
delete obj.name; // delete를 이용하여 삭제하기 위해서는 타입에서 ?를 입력하여 선택사항임을 명시해주면 된다.
obj.getFamilyName();
obj.age = 200;
obj.age = -500;

//getter ,setter
class Person{
    _bloodType : string;

    constructor(bloodType : string){
        this._bloodType = bloodType;
    }

    set bloodType(btype : string){ // 메소드 앞에 set을 입력하면  *처럼 외부에서 ()없이 대입문을 이용하여 속성에 접근할 수 있다.
        if(btype === 'a' || btype === 'b'){
        this._bloodType = btype;
        }
    }

    get bloodType(){ //get을 입력하면 #처럼 사용할 수 있게 해준다.
        return this._bloodType;
    }
} 

const p1 = new Person('b');
p1.bloodType = 'c'; //*
p1.bloodType; //#

const myObj = Object.create(null,{
    name : {
        value : 'duckuueng',
        writable: true, //writable을 true로 해주면 속성의 내용을 변경해줄 수 있음(false = readonly)
        configurable : false, // false로 해줄 경우 삭제할 수 없음. 
    }
}); //두번째 인자로 구성객체를 넣어줘야함
 
myObj.name = '하하';



