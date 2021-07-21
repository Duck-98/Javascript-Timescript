const books = [];

books[0] = "헨리 6세 제1부"; //배열에 데이터를 넣는 가장 기본적인 방법.
books[1] = "헨리 6세 제2부";
books[2] = "헨리 6세 제3부";

books.push("리처드 3세");  // push 메소드 -> 배열이 갖고 있는 데이터에 맨 마지막에 값을 추가함.
books.push("실수 연발");
books.push("말괄량이 길들이기"); 
 
console.log(books);
console.log(books.length); // 배열의 길이를 알려줌.

books.pop();  //pop 메소드 -> 배열의 가장 마지막에 있는 데이터를 꺼내옴 (배열안에 있는 데이터는 사라짐)
books.pop();

console.log(books);
console.log(books.length);

const oneBooks = books.slice(1, 2); // 배열에서 꺼내올 데이터의 위치를 지정할 수 있음
// 첫번째 인자 잘라올 배열의 시작 위치, 두번째 인자 잘라올 배열의 마지막 위치 
console.log(oneBooks);
console.log(books);
console.log(books.length);

const twoBooks = books.splice(1,2,'햄릿','오셀로','리어왕');
// 데이터를 빼온 후 꺼내온 자리에 데이터를 추가함.
console.log(twoBooks);
console.log(books);
console.log(book.length);

twoBooks.shift(); // shift -> 앞에 있는 데이터를 빼옴.
console.log(twoBooks);
twoBooks.unshift('한 여름밤의 꿈'); // unshift -> 배열을 오른쪽으로 밈.
console.log(twoBooks);

const allBooks = books.join(); //join -> 모든 배열의 데이터를 한 개의 데이터로 바꿈.

console.log(allBooks);

const newBooks = allBooks.split(',');

console.log(newBooks);

console.log(oneBooks);
console.log(twoBooks);
// concat을 이용하여 배열을 합치는 방법
const nextBooks = oneBooks.concat(twoBooks);
//concat -> oneBooks의 데이터와 twoBooks를 합침.
console.log(nextBooks);
// 전개연산자를 이용하여 배열을 합치는 방법
const nextBooksList = [...oneBooks, twoBooks];

console.log(nextBooksList);