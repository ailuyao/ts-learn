// 接口: 鸭式辨型法或结构性子类型化, 接口规定数据应该所具有的结构
// 接口只规定约束, 没有具体实现
// 接口可以描述函数、对象的方法或者对象的属性
// interface Object {}

/**
 * 接口规定 普通对象的类型
 */
interface IWebsite {
  host: string;
  domain: string;
  // tsconfig.json 中 strictNullChecks: true
  // 可选属性会被自动地加上| undefined
  port?: number;
  readonly slashes?: boolean;
}

function createURLMap(option: IWebsite): void {
  console.log(`${option.domain}---${option.host}`);
}
// 如果直接传递一个对象直接量形式, 那么参数必须和接口的规定严格匹配, 不能有额外属性
// 否则只要接口规定的相应属性能够在参数中找到, 并且类型一致即可
// createURLMap({
//   host: '127.0.0.1',
//   domain: 'www.baidu.com',
//   search: '?ie=utf-8'
// });
const uriObj = {
  host: '127.0.0.1',
  domain: 'www.baidu.com',
  search: '?ie=utf-8'
};
createURLMap(uriObj);

/**
 * 接口规定 函数的类型
 */
interface Ifunc {
  // 函数接受一个字符串参数, 返回值是布尔型
  (str: string): boolean;
}
const funcIns: Ifunc = function(str: string) {
  // 函数的参数名不需要与接口里定义的名字相匹配, 只需要类型相同即可
  return true;
};

/**
 * 可索引的类型(数组,对象等可以通过索引key 获取值value)
 * 支持两种索引签名: 字符串和数字, js 通过转化 string 去索引对象
 * 可以同时使用两种类型的索引, 但数字索引的返回值必须是字符串索引返回值类型的子类型
 */
interface IidxType {
  // 索引签名只读, 防止赋值
  readonly [index: number]: string;
}
let tplist: IidxType = ['Google Chrome', 'Facebook'];

/**
 * 类实现接口
   接口描述了类的公共部分，而不是公共和私有两部分
   当一个类实现了一个接口时, 只对其实例部分进行类型检查
   constructor存在于类的静态部分, 不在检查的范围内
 */
interface klsTest {
  isShow: boolean;
  callback(): void; // 可以不实现
}
class flowComp implements klsTest {
  constructor(businessId: string, defKey?: string) {}
  isShow = true;
  callback() {}
  renderTemp() {
    console.log('render done.');
  }
}

/**
 * 继承接口: 通过继承, 实现将一个接口成员复制到另一个接口, 也可以一次性继承多个接口
 */
interface IDCard {
  idx: string;
}
interface IBirth {
  birth: Date;
}
interface Iidentification extends IDCard, IBirth {
  address: string;
}

let personInfo = <Iidentification>{};
personInfo.idx = '342319xxxxx';
personInfo.birth = new Date();
personInfo.address = 'hangzhou';

/**
 * 混合类型接口: 预期 一个对象可以同时做为函数和对象使用, 并带有额外的属性
   函数接口:接口只有一个函数成员组成, 如果同时还具有其他成员, 可以用来描述对象的属性和方法, 即构成了一个混合接口
 */
interface Counter {
  (start: number): string;
  interval: number;
  reset(): void;
}
function getCounter(): Counter {
  // 类型断言, 函数对象转换为Counter类型,转换后的对象不但实现了函数接口的描述, 使之成为一个函数,还具有interval属性和reset()方法
  // 断言成功的条件: 两个数据类型只要有一方可以赋值给另一方,这里函数类型数据不能赋值给接口类型的变量, 因为它不具有interval属性和reset方法;则只有接口类型数据赋值给函数类型变量是成立的
  let counter = <Counter>function(start: number) {
    console.log(start);
  };
  counter.interval = 20;
  counter.reset = function() {
    counter.interval = 20;
  };
  return counter;
}
let couterdemo = getCounter();
couterdemo(10);
couterdemo.reset();
couterdemo.interval = 30;

/**
 * 接口继承类
   继承类的成员, 但不包括其实现
   继承类的private和protected成员(接口类型只能被这个类或其子类所实现)
 */
class parentKls {
  private privateA: any;
  detectBrowser(version: string): void {}
}
interface subFace extends parentKls {
  detectPlatform(): void;
}

// 初始化接口变量, 否则要初始化 prop 所有的属性
interface IProp {
  name: string;
  documentation: string;
  type: string;
}
let prop = {} as IProp; // JSX 常用作类型断言
