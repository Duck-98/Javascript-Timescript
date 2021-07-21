type Box = {
    width : number;
    height : number;
    borderRadius : number;
    backgroundColor : string;
    borderWidth?: number; // ? =>optional 속성 있을 수도, 없을 수도
    ['className']?: string;
}
// 객체 문법
let box : Box ={
    width : 200,
    height : 200,
    borderRadius : 5,
    backgroundColor :'red'
};
// 함수를 이용한 객체 생성 방법 ,위와 같은 구조와 다르게 함수를 이용한 객체는 변경에 용이하다.
function makeBox(
    width : number,
    height : number,
    borderRadius : number,
    backgroundColor : string
): Box{
    return {
        width,
        height,
        borderRadius,
        backgroundColor
    };
}
makeBox(100,100,0,'blue'); //데이터는 바깥쪽에서 공급. 

// 클래스를 이용한 객체 생성
class Shape implements Box{
    width: number;
    height : number;
    borderRadius : number;
    backgroundColor : string;

    constructor(
        width : number,
        height : number,
        borderRadious : number,
        backgroundColor : string
    ){
        this.width = width;
        this.height = height;
        this. borderRadius = borderRadious;
        this.backgroundColor = backgroundColor;
    }
}
const boxShape = new Shape(10,10,0,'blue');

box.borderWidth = 10;
box['className']= 'box rounded';

// 객체 변형

const box1 = box; //객체는 참조 타입이기 때문에 다른 변수에 넣어도 같은 객체다.
const box2 = Object.assign({},box);// assign 첫번째 인자에게 그 이후로 받은 인자들을 overwrite한 후 리턴함.
const box4 = {...box, borderRadious : 10}; // 빈 객체를 만든 후 전개연산자를 이용함. (새로운 속성을 추가할 수 있음 ex)borderRadius : 10)
const box3 = JSON.parse(JSON.stringify(box)); 
 //객체를 문자열로 바꾼 후 바뀐 문자열을 다시 객체로 변경. 객체가 너무 크거나,
 // 새로운 속성을 추가하기에는 적합 x