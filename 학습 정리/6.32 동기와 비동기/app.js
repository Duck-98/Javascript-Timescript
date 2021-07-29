
// 콜백 구조를 Then catch를 이용하여 호출해주는 것 -> promise
const p = new Promise((resolve, reject) =>{
    
    setTimeout(() => {
      resolve('ok'); // 성공하면 resolve 호출
    }, 2000);
    reject('실패');  // 실패하면 reject 호출
});

p.then(function(ok){
    console.log('첫번째 성공')
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve('두번째 성공');            
        }, 3000);
    })
    
}).then(function(ok){
    console.log(ok); // resolve를 받아줌
}).catch(function(error){
    console.log(error); // catch를 이용하여 reject를 받아줌.
});



// 동기 코드 -> ex) 6번문이 진행이 되기 전까지 7번 코드가 실행될 수없는 코드.(순서대로 작동되어야함) 
function double(x){
    return x*2;
}
const x = double(100);
const y = x;

// 비동기 코드 (순서 상관 x)

function calcValue(a, b, cb){
    setTimeout(() =>{
        return a + b;
    }, 100)
}
const r = calcValue(10, 20, (result)=> {
    console.log(result);
}); // 콜백함수
const z = r;

