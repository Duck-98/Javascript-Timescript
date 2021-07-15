import { v4 } from 'uuid';

type UniqObject = {
  id: string;
  [key: string]: string | number | boolean;
}

const makeObject = (): UniqObject => ({
  id: v4(),
});

console.log(makeObject());
console.log(makeObject());
