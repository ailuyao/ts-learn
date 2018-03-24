/**
 * 高级类型
 */

// 交叉类型Intersection &
function extend<T, U>(first: T, second: U): T & U {
  let result = <T & U>{};
  for (let id in first) {
    // 使用类型断言, 解决类型冲突问题
    (<any>result)[id] = first[id];
  }
  for (let id in second) {
    if (!result.hasOwnProperty(id)) {
      (<any>result)[id] = (<any>second)[id];
    }
  }
  return result;
}

// 联合类型 | , 只能访问共有成员(方法)
const iunion: string | number = 1;

// 类型保护: 只要判断成功，后面对应作用域中的类型就确定
// 自定义类型保护
// typeof 类型保护
// instanceof 类型保护
// switch case 类型保护
interface Square {
  kind: 'square';
  size: number;
}
interface Rectangle {
  kind: 'rectangle';
  width: number;
  height: number;
}
interface Circle {
  kind: 'circle';
  radius: number;
}
type Shape = Square | Rectangle | Circle;

function assertNever(x: never): never {
  throw new Error('Unexpected object: ' + x);
}
function area(shape: Shape) {
  switch (shape.kind) {
    case 'square':
      return shape.size * shape.size;
    case 'rectangle':
      return shape.height * shape.width;
    case 'circle':
      return Math.PI * shape.radius ** 2;
    default:
      return assertNever(shape); // error here if there are missing cases
  }
}

// 字符串字面量类型
type sex = '男' | '女'; //sex 取值限定在 男,女 两个字符串字面量

// 多态的this类型
interface iiType {
  extend<T>(other: T): this & T;
}

/**
 * keyof 索引类型查询操作符
   假设T是一个数据类型, keyof T产生的类型是T的属性名称字符串字面量类型构成的联合类型
 */
interface Website {
  origin: string;
  port?: number;
  pathname?: string;
  href: string;
}
type webInstance = keyof Website;
// 字符串索引签名
interface tsMap<T> {
  [key: string]: T;
}
type tsMapIns = keyof tsMap<number>;
let mapValue: tsMap<number>['iamkey']; //number

// 索引类型: 编译器可以检查使用动态属性名的代码
interface ICookie {
  name: string;
  value: string;
  domain: string;
  path: string;
}
// function funcIdx(obj, names) {
//   return names.map(name =>obj[name]);
// }
function funcIdx<T, K extends keyof T>(obj: T, names: K[]): T[K][] {
  return names.map(name => obj[name]);
}
let cookieIns: ICookie = {
  name: 'SESSION',
  value: 'hash',
  domain: 'china.cn',
  path: '/'
};
let strings = funcIdx(cookieIns, ['name', 'value']);

// 映射类型: 将现有类型进行转换(TS内置了可选Partial,只读Readonly;自定义)
interface IPerson {
  name: string;
  age: number;
  location: string;
}
type ReadonlyPerson = Readonly<IPerson>;
type PartialPerson = Partial<IPerson>;
// type Partial<T> = { [P in keyof T]?: T[P] };

// 类型别名: type 关键字, 不会新建一个类型, 只是创建一个新名字来引用此类型
// 接口是创建一个新的类型
type ant<T> = T | (() => T);
type List<T> = ArrayLike<T>;

// 可辨识联合类型: 合并字符串字面量类型, 联合类型, 类型保护和类型别名

// Widened 类型
// 一个类型的Widened形式就是将原始数据中的null或undefined的数据类型由Any类型替换
const iWidened = [null, undefined];
