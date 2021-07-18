function doException(){
    throw new Error ('오류'); //throw => 예외처리
    
}
function noException(){
    return true;
}

function callException(type){
    if(type === 'do'){
        doException();
    }else{
        noException();
    }
}

function main()
{
    try{
        callException();
    }catch(e){
        console.log(e);
    }finally{
         console.log('a');
    }
    //오류가 발생하지 않으면 finally로 바로 이동
}

main();