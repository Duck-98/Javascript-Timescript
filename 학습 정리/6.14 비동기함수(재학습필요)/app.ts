function delay(ms: number): Promise<string>{
    return new Promise((resolve, reject) => {
        setTimeout(() => { 
            if (Math.floor(Math.random() * 10) % 2 === 0){
                resolve('success');
            } else{
                reject('fail');
            }
        }, ms); // ms -> 시간
    });
}

delay(3000)
    .then((result:string) => {
        console.log('done promise!' + result);
    }) // 콜백함수
    .catch((error :string) =>{
        console.error('fail promise!' + error);
    }); // 실패 시 처리

async function main(){ 
    try{
        console.log('start job');
        const result = await delay(3000); // 기존의 then, catch를 쓸 필요 없이 promise를 반환하는 함수 앞에 await을 붙여준다.
        console.log('done async!' + result);
    } catch(e) { //error은 catch구문으로 처리하면 됨.
        console.error('fail async!' + e);
    }
}

main();