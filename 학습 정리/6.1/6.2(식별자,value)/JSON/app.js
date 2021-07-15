
const jsonString = `
  {
    "name": "Kim min tae",
    "age": false,
    "bloodType": "0"
  }
`;

try {
  const myJson = JSON.parse(jsonString);

  console.log(myJson.name);

  console.log(JSON.stringify(myJson));
} catch(e) {
  console.log('다시한번 시도해 주세요.');
}
