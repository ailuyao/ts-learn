// Typescrit的模块机制与es6的模块基本类似, 也提供了转换为amd，es6，umd，commonjs，system的转换

// TS中, 内部模块称为命名空间, 外部模块称为模块

// export 语法定义一个模块的导出对象. 它可以是类, 接口, 命名空间, 函数或枚举
// export interface IRestPaths {}
// import { Fetch } from './file.ts';

// 任何使用module关键字来声明一个内部模块的地方都应该使用namespace关键字来替换, 命名冲突
namespace Validation {
  export interface StringValidator {
    isAcceptable(s: string): boolean;
  }

  const lettersRegexp = /^[A-Za-z]+$/;

  export class LettersOnlyValidator implements StringValidator {
    isAcceptable(s: string) {
      return lettersRegexp.test(s);
    }
  }
}
