### 结构

[模板文件](https://www.tslang.cn/docs/handbook/declaration-files/templates.html)
declare 只能作用于最外层

```
#声明全局函数
declare function get(id: string | number): string

#namespace 命名空间
declare namespace pet{
  let age: number | string
  function getName(id: number | string): string
  class XXX {}
  namespace otherpet {}
}

#扩展 Date 等内置对象
interface Date {
  format(v: string): string
}
```

```
#全局库写法(一般都转化为 umd 库)

//作为函数和对象调用
declare function $(s:string): void
declare namespace ${
  let aaa:number
}//同名的 function 和 namespace 会合并

//作为函数和类调用
/** 类的实例方法 \*/
interface People{
  name: string
  age: number
  getName(): string
  getAge():number
}
interface People_Static{
  new (name: string, age: number): People
  /** 类的静态方法 _/
  staticA():number
  /\*\* 作为函数调用, 没有名字的函数, 改类型变量是函数 _/
  (w:number):number
}
declare const People:People_Static
People()

#模块化库写法,require 或 import 调用, export 等导出, declare --> export
常见于 nodejs 库
declare module "mymodule" {
  export let a: number
  export function b(): number
  export namespace c{
    let cd: string
  }
}
// 导出一个函数|变量|常量
declare module "app" {
  function color(some:number):number
  export=color
  //const c:400
  //export=c
}

#UMD写法, 支持全局库(全局变量)和模块库(require 方式), jQuery,Moment.js,lodash 等
先按照全局的方式写 d.ts, 写完在最后加上 declare module "xxx" 的描述

declare namespace jquery2{
  let a:number
}

declare module "jquery2" {
  export = jquery2
}
```

### 规范

string number boolean object{}
回调函数参数少使用可选参数, 因为 ts 总是允许提供一个接收较少参数的回调函数.
函数尽可能使用可选参数和联合类型.
函数重载普通靠后.
类型 值 命名空间.
不要在声明文件里使用/// <reference path="..." />
应该使用/// <reference types="..." />代替

#### ts 支持 css

```
1. const styles = require('./index.scss')

2.
declare module '*.scss' {
  const content: any;
  export default content;
}
import styles from './index.scss'

3.
使用`typed-css-modules`为index.scss生成index.scss.d.ts
```

jquery react lodash
