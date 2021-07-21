// 함수를 이용한 계산

function calculateCircleArea(radius){
    return radius * radius * Math.PI;
}

function calculateRectArea(width, height){
    return width * height;
}
// 클래스를 이용한 계산
class Circle {
    #radius;   // #을 이용하여 타입스크립트의 private와 같은 기능을 구현해줌.

    constructor(radius){
        this.#radius = radius;
    }

    get radius(){
        return this.#radius;
    }

    area = () => this.#radius * this.#radius * Math.PI;

}

class Rect{
    #width;
    #height;

    constructor(width, height){
        this.#width = width;
        this.#height = height;
    }

    get width(){
        return this.#width;
    }

    get height(){
        return this.#height;
    }

    area = () => this.#width * this.#height;
}

const circle = new Circle(50);
const rect = new Rect(150,200);

console.log(calculateCircleArea(circle.radius));
console.log(calculateRectArea(rect.width,rect.height));

console.log(circle.area());
console.log(circle.area());



