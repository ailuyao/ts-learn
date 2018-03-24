### import

`import * as react from 'react'`
[1](https://github.com/Microsoft/TypeScript/issues/3337)
[2](https://github.com/Microsoft/TypeScript-React-Starter/issues/8)

```
模块没有默认导出, 使用该语法(fs, react, react-dom)
// import * as fs from 'fs'
// import fs from 'fs'
// import fs = require('fs')
```

### 函数类型表示

```
// lambda 表达式方式
declare const name:() => void;
// 直接声明
declare function name():void;
// interface 形式
interface Callback {
  ():void;
}
declare const name:Callback;
```

### practice

```
{} as Options(interface)
使用 {}, 相对于 Object
已知某个类型范围的时候, 可以使用 in 和 keyof 来遍历类型
```
