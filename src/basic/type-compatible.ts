/**
 * 类兼容(相互赋值)
 * 比较两个类类型数据时, 只有实例成员会被比较, 静态成员和构造函数不会比较
 */
class Classify_1 {
  tagName: string;
  archive: string;
  constructor(title: string) {}
}

class Classify_2 {
  tagName: string;
  constructor(date: string | number) {}
}

let instance_1: Classify_1 = new Classify_1('ts');
let instance_2: Classify_2;
instance_2 = instance_1;
// instance_1 = instance_2; //throw error
// instance_1 中的所有实例成员必须在 instance_2 中找到对应的成员

/**
 * 函数兼容
 * 1. 参数是否兼容; 2. 返回值是否兼容
 * 参数的名称没必要是相同的, 只要类型兼容
 * 源函数的返回值 需要能够赋值给 目标函数返回值类型
 * 目标函数的返回值类型是void, 源函数返回值可以是任意类型
 */
let funcX = (ant: number, address?: string, target?: string) => 0;
let funcY = (num: number, str: string) => 0;

funcY = funcX;
// funcX = funcY; // throw error
// JS中 函数调用传参数量 小于 函数定义参数数量是可以的

/**
 * 泛型兼容
 * 没有指定泛型类型的泛型参数, 会把所有泛型参数当成 Any类型 比较
 */
interface Empty<T> {}
let x: Empty<number>;
let y: Empty<string> = {};

x = y;
