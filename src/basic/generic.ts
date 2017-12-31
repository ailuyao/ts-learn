/* 泛型
  泛型类型变量<T>, 它是一种特殊的变量，只用于表示类型而不是值
  T可以捕获用户传入的类型, 之后就可以使用这个类型
  泛型变量常用 T U V 标识
  E: Element
  K: Key
  N: Number
  T: Type
  V: Value
  S U V: 2nd 3rd 4th types ...
*/

// 泛型函数(在函数中应用泛型)
function fnGenerics<T>(arg: T): T {
  return arg;
}
let fnins_1: <T>(arg: T) => T = fnGenerics;
let fnins_2: { <T>(arg: T): T } = fnGenerics;

// 泛型接口/泛型类(在接口和类中应用泛型)
interface GenericIdentityFn<T> {
  (arg: T): T;
}
function IdentityFn<T>(arg: T): T {
  return arg;
}
let myIdentity: GenericIdentityFn<number> = IdentityFn;

class GenericIdentityCls<T> {
  title: T;
}
let clsIns = new GenericIdentityCls<string>();
clsIns.title = 'learn ts';

// 泛型限定(泛型约束)
// instance: 传递的类型必须具有length属性
interface Lengthwise {
  length: number;
}
function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);
  return arg;
}
// instance: 类型参数之间相互约束
function getPropertyByKey<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}
let irestrain = { title: 'ts', name: 'ts' };
getPropertyByKey(irestrain, 'name');
// getPropertyByKey(irestrain, 'data');
