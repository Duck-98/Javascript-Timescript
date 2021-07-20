function makeInfiniteEnergyGenerator(){
    let energy = 0;
    return function(booster = 0){
        if(booster){
            energy += booster;
        } else{
        energy++;
    }

    return energy;
 };
}

function* infiniteEnergyGenerator(){ // *를 입력하면서 제네레이터함수임을 입력시킴
    let energy = 1;
    while (true){
        const booster = yield energy; // yield는 제너레이터 함수의 실행을 일시적으로 정지시키며, yield 뒤에 오는 표현식은 제너레이터의 caller에게 반환된다.
        //즉, 일반 함수의 return과 매우 유사하다고 볼 수 있다.

        if(booster){
            energy += booster;
        } else {
            energy ++;
        }
    }
}

const energy = makeInfiniteEnergyGenerator();

for (let i = 0; i < 5; i++){
    console.log(energy());
}
console.log(energy(5));


const energyGenerator = infiniteEnergyGenerator(); 

for(let i = 0; i<5 ; i++){
    console.log(energyGenerator.next()); //next -> generator 함수 본체를 재개시켜줌.
}
//즉 next가 사용되기 전까지는 함수가 종료된게 아닌 멈춘 상태로 유지하고 있음.
console.log(energyGenerator.next(5));