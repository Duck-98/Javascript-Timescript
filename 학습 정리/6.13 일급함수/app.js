// * 반환값으로 전달되는 함수

function salePrice(discountRate, price){
    return price - (price * (discountRate * 0.01));
}

console.log('여름세일 - '+ salePrice(30,567000));
console.log('겨울세일 - '+ salePrice(10,567000));

function discountPrice(discountRate){
    return function(price){
        return price - (price * (discountRate * 0.01));
    }
}

console.log('여름세일 - '+ discountPrice(30)(567000));
console.log('겨울세일 - '+ discountPrice(10)(567000));


let summerPrice = discountPrice(30);
let winterPrice = discountPrice(10);

console.log('여름 세일 -' + summerPrice(567000));
console.log('겨울 세일 -' + winterPrice(567000));