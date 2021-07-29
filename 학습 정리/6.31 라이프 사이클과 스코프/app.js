let myname = 'duck';

function foo_(){
    let x = 10;
    console.log(myname);
    console.log(x);
    bar(); // 호이스팅 메커니즘에 의해 아직 선언되지 않았지만 bar함수문을 사용할 수 있다. (함수식은 x)

    // 함수문
    function bar(){
        let y = 10;

        console.log(myname);

    }
    console.log(y); //오류 발생!

    // 함수식
    const zoo = function(){

    }

    if(x === 10){
        let x = 100;
        console.log(x); // 100 (foo 함수에 있는 x= 10이랑 다르다.)
        // 스코프에서 변수를 찾을 때는 자신이 위치한 스코프에서 찾게된다. 하지만
        //본인이 위치한 곳에 없으면 다른 스코프에서 찾게 된다.
    }
    bar();

    // foo 함수 안쪽에서는 바깥에 있는 데이터를 접근할 수 있다.
}
// 스코프 : 안쪽에서는 바깥쪽에 있는 데이터를 접근할 수 있지만. 바깥족에서는 안쪽에 있는 데이터를 접근할 수 없다.
foo_();

console.log(x); // foo 함수 안에 있는 x를 호출하게 되면 오류가 발생한다.