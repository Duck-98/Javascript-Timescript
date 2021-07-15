let a = 10;  
let b = 10;


let o = {
    isLoading : false,
};
function foo(o){
    o.isLoading = true;

}
foo(o)
console.log('done');

//결과값 o.isLoading = true