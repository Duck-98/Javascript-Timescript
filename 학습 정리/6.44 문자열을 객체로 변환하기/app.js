import MakeObject from './make-object.js';

const movieData = `title,Release,Ticketing Rate,Director
보헤미안 랩소디, 2018.10.31, 11.5%, 브라이언 싱어
완벽한타인, 2018.10.31, 4.6%, 이재규
동네사람들, 2018.11.07, 0.5%, 임진순`;

const movieList = new MakeObject(movieData);

console.log(movieList.toAllObject());