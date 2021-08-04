class HeaderListData {
    constructor(source, separator = ','){
        const rawData = source.split('\n');

        this.headers = rawData[0].split(separator);
        // split 함수 -> 객체를 지정한 구분자를 이용하여 문자열을 나눠줌
        this.rows = rawData 
                        .filter((row, index) => index > 0) //filter함수 주어진 조건을 만족한 모든 요소들을 모아 배열을 만듬.
                        .map(row => row.split(separator)); //map 함수 주어진 함수를 호출한 결과를 모아 새로운 배열 반환
    }                   //ex) row => row.split(separator)을 만족하는 요소들로 배엷 ㅏㄴ환

    row = index => this.rows[index]
        .map((row, index) => [this.headers[index], row]);


    get length(){
        return this.rows.length
    }    

    get columnLength(){
        return this.headers.length;
    }
}

    export default class MakeObject extends HeaderListData {
        toObject = index => this
        .row(index)
        .reduce((a, [key, value]) => ({...a, [key] : value}), {});

        toAllObject = () => //순회를 하기 위해( 배열연산 체이닝) 배열을 만듬
            Array(this.length)
                .fill(0) // 데이터가 없으면 순회를 못하기때문에 0을 채워넣음
                .map((item, index) => this.toObject(index))
    }