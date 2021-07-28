const jsonString = `
{
    "name" : "duck",
    "age" : 24,
    "bloodType" : "o"

}
`;

try{
// json은 ''를 사용할 수 없으며 마지막에 ,도 사용하지 않음. 함수를 사용할 수 없다.
const myJson = JSON.parse(jsonString); // json 객체화 완료.

console.log(myJson.name);
//객체화한 json은 접근할 수 있음.
console.log(JSON.stringify(myJson));
//데이터를 전송하기 위해서 Json으로 만들고 싶다면 위와 같이 하면 된다.
// json을 사용하고 싶다면 객체화 한 후 사용하고 업데이트 한 후
// 다시 json 형식으로 변환시켜 서버에 전송하면 된다.
}catch(e){
    console.log('다시 한번 시도해주세요.');
} //json은 에러가 발생할 시  프로그램이 종료가 되기 때문에 try catch문을 이용하여 오류처리를 해야한다.


