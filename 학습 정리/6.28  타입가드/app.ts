function doubleTypeFucntion(a:number | string){
    if(typeof a === 'string'){
        return a.replace('x','X');
    }

    //return a.replace('Y', 'y');
}

doubleTypeFucntion(10);

function foo(a?: number | null){
    if(a === null)return;

    console.log('display before');
    console.log(a?.valueOf()); ///a가 null이면  undefined로 변함 그렇기때문에 타입가드를 이용하여 리턴할 수 있게 해줘야힘.
    console.log('display after');
}

foo();

interface Foo{
    foo : string;
    common : string;
}

function isFoo(arg : any) : arg is Foo{ //arg = foo 둘의 값이 같으냐?
    return arg.foo !== undefined;  //타입가드
}

console.log(isFoo({foo : 'ok', common : 'wow'}));