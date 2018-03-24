// 使用三斜线指令来引入(自定义)d.ts文件, 置于文件顶部 /// <reference path="index.d.ts" />

// TS 会默认的查找 node_modules/@types 文件夹, 从该处获得模块定义
// npm install @types/jquery

// declare可以向 TypeScript域中引入一个变量, 在编写代码的时候实现智能提示的功能
declare const dstr: string; // 声明变量
declare const dnum: 1; // 声明常量
declare function dfunc(cfg: string): string; // 声明函数
interface PaginationConfig {
  current: number;
  defaultCurrent?: number;
  total: number;
  size: number;
}
// 声明 class
declare class Pagination {
  static pageSize: number; //静态变量
  static setPageNum(): number; //静态方法

  constructor(config: PaginationConfig);
  onChange(page: number, pageSize: number): Function;
}
// 声明命名空间
declare namespace learnts {
  function tsfunc(str: string): string;
  let tsnum: number;
}
//声明混合类型 如jQuery
declare function Minx(str: string): void;
declare namespace Minx {
  let num: number;
}

// 模块化
declare module 'group' {
  export let name: number;
  export function getStaffInfo(sno: number): object;
  export namespace duty {
    let title: string;
  }
}
//import { name } from 'group';
