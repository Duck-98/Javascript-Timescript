const simpleCamel = (text, splitter = '')=> text.split(splitter)
                    .map((word, wi) => word. split('')
                        .map((c, ci) => wi > 0 && ci === 0 ? c.toUpperCase() : c.toLowerCase())
                        .join(''))
                    .join('');


function convertCamelName(name) {
    let camelName = '';
    for(let i=0, newSpace = false; i < name.length; i++){
        if(name[i] == ' '){
            newSpace = true;
            continue;
        }

        if(newSpace){
            camelName = camelName + name[i].toUpperCase(); // 소문자 -> 대문자 메소드
            newSpace = false;
        } else {
            camelName = camelName + name[i].toLowerCase(); // 대문자 -> 소문자 메소드
        }
    }

    return camelName;
}                    

const camelName1 = convertCamelName('na duck kueng');

const camelName2 = simpleCamel('NA DUCK KUENG');

console.log(camelName1);
console.log(camelName2);