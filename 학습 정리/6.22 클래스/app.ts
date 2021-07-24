interface Container {
    tagName : string;
    className : string;
    childeren?: string[];
    getTagName : () => string;
    getClassName : ()=> string;
}

abstract class Shape {
    public static MIN_BORDER_WIDTH = 0;
    public static MAX_BORDER_WIDTH = 0;
  
    public readonly name : string = 'Shape'; //public > protected> private
    protected _borderWidth : number; // protected 상속받은 자식클래스에서 사용 가능
    private action!: string; //  private ->class 안에서만 통용됨

    constructor(borderWidth : number = 0){
        this._borderWidth = borderWidth;
    }
    abstract area : () => number;

    set borderWidth(width : number){
        if(width >= Shape.MIN_BORDER_WIDTH && width <= Shape.MAX_BORDER_WIDTH){
            this._borderWidth = width;
        } else {
            throw new Error('boderWidth 허용 범위를 벗어난 동작을 시도했습니다.');
        }
    }

    get borderWidth(): number{
        return this._borderWidth;
    }
}

class Circle extends Shape {
    private _radius : number;
    public name : string = 'Circle';

    constructor(radius : number){
        super(); //super -> circle의 부모 = Shape 부모의 생성자를 작동시키기 위해서 반드시 사용해야함.
        this._radius = radius;
    }

    get radius(){
        return this._radius;
    }

    area = () => this._radius * this._radius * Math.PI;
}
/*결국에는, SET, GET 메소드를 사용하는 이유는 외부로부터 변수값에 직접적으로 접근하는것을 막기 위해서다.
 직접 접근하게 되면 값이 변하게 되고 그러면 데이터 무결성이 깨질 수 있기 때문이다.
대표적으로 자바에서는 함수를 통해 값을 전달받고, 전달하고 방식을 권장하고 있다. 
또한 클래스 내에서 변수 private(캡슐화, 정보은닉)를 선언해서 외부에서 접근할 수 없도록 한다. 
돼지저금통을 만든다  > 변수 선언
그 안에 돈을 저축한다 > set 
그 안에 돈이 얼마나 들어 있는지 본다 > get */
class Rect extends Shape{
    private _width : number;
    private _height : number;

    constructor(width : number, height : number){
        super();

        this._width = width;
        this._height = height;
    }

    get width(){
        return this._width;
    }
    area = () => this._width * this._height;
}

const circle = new Circle(50);
const rect = new Rect(150,200);

console.log(rect.borderWidth);
console.log(rect.name);
console.log(circle.name);

try{
    rect.borderWidth = 10;
} catch(e){
    console.error(e); //오류 처리
}
/*implements 는 부모의 메소드나 변수를 그대로 가져다 쓰는게 아닌 반드시 오버라이드 해서 사용 해야 한다.
해당 인터페이스에 있는 프로퍼티 및 메소드를 전부 가지고 있거나 구현해야 한다.
그리고 다중 상속도 지원한다.*/
class MyContainer implements Container { 
    tagName : string;
    className : string;

    constructor(tagName : string, className: string){
        this.tagName = tagName;
        this.className = className;
    }

    getTagName = () => this.tagName;
    getClassName = () => this.className;
}
console.log('done');