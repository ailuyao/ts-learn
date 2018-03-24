/**
 * 函数具有类型
 */
// 函数声明 创建函数
function fn_1(id: number): string {
  return `my student ID is ${id}`;
}
// 函数表达式 创建函数
const fn_2: (id: number) => string = id => `my student ID is ${id}`;
const fn_3: (id: number) => string = function(id) {
  return `my student ID is ${id}`;
};

/**
 * 可选参数, 默认参数, 剩余参数
   可选参数必须位于必需参数后面
 */
function fn_optional(province: string, city?: string): string {
  return `I live in ${province} ${city}`;
}

function fn_default(province: string, city = '杭州'): string {
  return `I live in ${province} ${city}`;
}
function fn_rest(firstName: string, ...restOfName: string[]) {
  return firstName + ' ' + restOfName.join(' ');
}
// 箭头函数 捕获它声明时所在的上下文中this的指向
const fn_arrow = () => {
  return () => {
    console.log('hangzhou');
  };
};

/**
 *函数重载 overload
  一般意义上的函数重载是根据函数签名式的不同, 在函数被实际调用时,
  根据实际参数的类型来绑定到特定的重载函数, 但TypeScript的函数只支持以共用实现体为基础的重载,
  无论声明了多少个同名且不同签名的函数, 它都只能有一个实现体, 这个实现体必须对所有的重载版本都有意义
  对象字面量方法不可重载
 */
// 代码只定义了四个重载, 最后一个是用来实现重载的真正函数定义
function fn_overload(x: string): string;
function fn_overload(x: number): number;
function fn_overload(): number[][];
function fn_overload<T>(v: T): T[][];

function fn_overload(x?: any): any {
  if (typeof x == 'string') {
    return x;
  } else if (typeof x == 'number') {
    return x + 1;
  } else {
    return [];
  }
}

/**
 * 获取函数返回值类型, TS2.8
 */
type Reverse<T> = (arg: any) => T;

function returnResultType<T>(arg: Reverse<T>): T {
  return ({} as any) as T;
}

// result 类型是 number
const result = returnResultType((arg: any) => 3);
type ResultType = typeof result;
