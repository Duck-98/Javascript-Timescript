// 명령형 코드 
const arr = [];

for (const n of [1,2,3,4]){
    arr.push(n*2);
}

console.log(arr);

// 함수형 코드

const arr2 = [1,2,3,4]
    .map(n=> n*3)
    .filter( n => n % 2 !== 0)
    .map(n => `<li>${n}</li>`)
console.log(arr2); 