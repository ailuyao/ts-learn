// TypeScript 核心原则之一是对数据具有的结构进行类型检查
/**
 * 基本类型
 */

// 变量声明: var let const
// boolean
const ibool = true; //类型断言
// number
const inum: number = 6;
const szname = 'luyao';
// string
const istr: string = `Hello, my name is ${szname}.`;
// string[] | Array<string>
const iarray_1 = ['浙江', '杭州'];
const iarray_2: string[] = ['浙江', '杭州'];
const iarray_3: Array<string> = ['浙江', '杭州'];
// 只读数组(数组所有写方法都失效, 赋值等)
let ionlyarray: ReadonlyArray<number> = [1, 2, 3, 5];
(<number[]>ionlyarray)[1] = 5; //可以重新类型断言

/**
 * 元组:
    元组与数组类似, 但是数组元素类型是单一的
    表示一个已知元素数量和类型的数组，各元素的类型不必相同, 数据类型和顺序必须对应
    使用越界索引赋值数组元素, 会使用联合类型
    使用越界索引调用数组元素方法, 只会使用共有的属性或方法
 */
// https://github.com/Microsoft/TypeScript/pull/17765
// Make tuples have known length #17765
let ituple: [string, number];
ituple = ['西湖', 5];
// ituple = ['滨江', 4, 9, '西湖']; //but ituple[2] = 9

// 枚举
enum Color {
  Red = 0,
  Green = 2,
  Blue
}
const colorName_1: string = Color[2];
const colorName_2: Color = Color.Green;

/**
 * any
    any类型的变量可以被赋值为任意值
    Any类型数据可以赋值给任何数据类型变量(除never类型之外)
    Any类型对象任意属性值都是Any类型
    如果数据是Any类型，那么可以访问它的任意属性(即便是不存在)
 */
let inotSure: any = 4;
inotSure = true; // any 类型可以自由赋值
/**
 * void
    如果一个方法没有返回值，那么就用void作为返回值类型
    void类型的变量只能为它赋予undefined或者null
    Void类型是Any类型的子类型, 是Null和Undefined类型的父类型. 与其他类型无关联
 */

/**
 *null 和 undefined
    默认情况下null和undefined是所有类型的子类型,也就是可以赋值其他类型,但是不能够赋值给never类型
    当指定--strictNullChecks标记，null和undefined只能赋值给void和它们各自，可以避免很多问题
 */

/**
 *never: 永不存在的值的类型. 抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型
  常见于 throw error
  Never类型是任何类型的子类型,可以赋值给任何类型;没有类型是Never的子类型或可以赋值给Never类型(除了Never本身). 即使 Any类型也不可以赋值给Never类型
 */

// Symbols, 不可改变且唯一, 常被用做对象属性的键
let isym = Symbol('key'); // 可选的字符串key
let obj = {
  [isym]: 'value'
};

/**
 *类型断言: 实现对已存在数据类型的转换
  尖括号<>中的数据类型为目标类型
 */
const address_1: any = 'I live in hangzhou';
const strLength_1: number = (<string>address_1).length; //Any类型数据转换为string类型
const address_2: any = 'I live in hangzhou';
const strLength_2: number = (address_2 as string).length;
