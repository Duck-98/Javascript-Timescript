const arr = ['a','b','c','d','e','f'];

for(let i = 0; i < arr.length; i++ ){
    console.log(arr[i]);
}

let i = 0;
while( i < arr.length){
    console.log(arr[i]);
    i++;
}

i = 0;
do {
    console.log(arr[i]);
    i++;
}while(i < arr.length)

for(const item of arr){
    console.log(item);
} //배열 순회에 유용한 반복문]

for (const index in arr){
    console.log(arr[index]);
}
// 키의 값을 꺼내올 때 많이 사용되는 반복문
const obj = {
    color : 'red',
    width : 200,
    height : 200
};

for(const key in obj){
    console.log(key);
}