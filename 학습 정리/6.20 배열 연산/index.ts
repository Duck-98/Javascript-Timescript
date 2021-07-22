type Book = {
    title: string;
    copyright?: string;
    author?: string;
  };
  
  const books: string[] = [
    "헨리 6세",
    "리처드 3세",
    "실수 연발",
    "말괄량이 길들이기",
    "헨리 8세"
  ];
  
  books.forEach((book: string, idx: number) => {
    console.log(book, idx); //idx -> 배열의 몇번째 값인지
  });
  
  const bookObjects: Book[] = books.map((book: string) => {
    //map 함수
    return {
      //foreach와 다르게 map함수는 전달된 함수가 리턴한 값을 모아서 하나의 함수를 만든 후 순회가 끝나면 반환해줌.
      title: book,
      author: undefined
    };
  });
  
  console.log(bookObjects);
  
  const ShakeSpeareOneBooks: Book[] = books
    .map((book: string) => ({
      title: book
    }))
    .map((book: Book) => ({
      ...book,
      author: "William Shakespeare"
    }));
  
  console.log(ShakeSpeareOneBooks);
  
  const bookTitleToBookObject = (book: string) => ({ title: book });
  const makeAuthor = (name: string) => (book: Book) => ({
    ...book,
    author: name
  });
  
  const shakespeareTwoBooks: Book[] = books
    .map(bookTitleToBookObject)
    .map(makeAuthor("William Shakespeare"));
  
  console.log(shakespeareTwoBooks);
  
  const henry: Book[] = shakespeareTwoBooks.filter((book: Book) =>
    book.title.includes("헨리")
  );
  
  const someNumbers: number[] = [10, 5, 3, 14, 56];
  
  const sumNumber = someNumbers.reduce((a: number, b: number) => a + b);
  //reduce 함수 -> 인자를 2개를 받음. 값을 계산해서 리턴한 값을 모아 최종적으로 리턴한 값을 리턴함.
  console.log(sumNumber);
  
  type SomeObject ={
    [key : string] : string | number;
  };
  
  const someObjects : SomeObject[] = [
    {border : "none"},
    {fontSize : 24},
    {className : "box sm-box"}
  ];
  
  const someObject : SomeObject = someObjects.reduce(
    (a: SomeObject, b: SomeObject) => ({...a, ...b}),
    {}
  );
  
  console.log(someObject);
  // 두가지 방법
  function sumNumbers() : number{
    return Array.from(arguments).reduce((a:number, b: number)=> a+b, 0);
  } //argumnets -> 유사 배열 배열과 같은 형태의 자료구조이지만 reduce와 같은 메소드를 갖고 있지 않음.
  // 그렇기 때문에 배열 연산를 하기 위해서는 Array.from()을 이용하여 진짜 배열로 리턴해주기 때문에 배열 연산을 할 수 있음.
  // -> 요새는 잘 사용하지 않음.
  console.log(sumNumbers());
  
  
  function sumNumbersForTypeScript(...args : number []) : number {
    return args.reduce((a: number, b: number) => a+b, 0);
  }
  
  console.log(sumNumbersForTypeScript(10,20,30,40,50));