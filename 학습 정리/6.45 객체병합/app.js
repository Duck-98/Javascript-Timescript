const sourceObject = {
    traits : {
        first_name : {
            value : 'Bob',
            source_id : 1,
            updated_at : 16232413411
        },
        emails_opened_last_30_days: {
            value : 33,
            source_id : 2,
            updated_at : 16232413411
        }
    },
    cursor : {
        url : '/v1/spaces/lgJ4aajFN4',
        has_more : false,
        next : ''
    }
};
//깊은 복사
const newObject1 = JSON.parse(JSON.stringify(sourceObject)); // 객체의 데이터가 크면 비효율적
// 얕은 복사
const newObject2 = Object.assign({}, sourceObject);
const newObject3 = {...sourceObject};

console.log(sourceObject.traits.first_name.source_id);

newObject1.traits.first_name.source_id = 100;

console.log(sourceObject.traits.first_name.source_id);

newObject2.traits.first_name.source_id = 100;

console.log(sourceObject.traits.first_name.source_id);

newObject3.traits.first_name.source_id = 100;

console.log(sourceObject.traits.first_name.source_id);

//깊은 복사를 수행하는 함수
function deepCopyObject(obj){
    const clone = {}; //새로운 인자 생성
    for(const key in obj){
        if(typeof obj[key] == "object" && obj[key] != null){
            clone[key] = deepCopyObject(obj[key]); //재귀 호출
        } else{
            clone[key] = obj[key];
        }
    }
    return clone;
}

const newObject4 = deepCopyObject(sourceObject);

console.log(sourceObject.traits.first_name.source_id);

newObject4.traits.first_name.source_id = 1000;
console.log(sourceObject.traits.first_name.source_id);

const store = {
    user: null,
    cart : [],
    config : {
        multiDevice : false,
        lastLoginDate : 'Wen Jun 09 2021 20:46:55 GMT+0900',
    }
}

const newObject5 = {
    ...deepCopyObject(store),
    config : {
        ...store.config, // 나머지 속성들은 펼쳐줌
        lastLoginDate : new Date(),
    },
};

console.log(newObject5);

const DefaultStyle = {
    color : '#fff',
    fontColor : '#999',
    fontSize : 14,
    fontWeiht : 200,
};

function createParagraph(config){
    config = { ...DefaultStyle, ...config}; //사용자가 준 config를 붙여넣기함

    console.log(config);
}

createParagraph({fontSize : 12});