interface Person {
  name: string;
  age: number;
  [k: string]: any;
}

function getInfo(obj: Person) {
  console.log(obj);
}

getInfo({ name: 'lilei', age: 18 });
