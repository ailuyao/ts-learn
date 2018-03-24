## tsconfig.json

[解释](https://www.tslang.cn/docs/handbook/compiler-options.html)

### 常见 compilerOption

规则: 相应规则 开启 true, 编译才会报错, 默认选项都是 false

```
noImplicit: 否决, 禁用
noImplicitReturns: 没有return
noFallthroughCasesInSwitch: switch 代码块里的两个 case 之间忘记添加 break 语句
noEmitOnError: 不想在发生错误的时候, TypeScript 还会被编译成 JavaScript, 不触发编译
noImplicitAny: 将没有明确指定的类型默默地推断为 any 类型
allowJs: 允许编译 javascript 文件, 包含.js 和.jsx
noUnusedParameters: 若有未使用的参数则抛错。 不能有未使用的参数
noUnusedLocals: 若有未使用的局部变量则抛错。 不能有未使用的局部变量
strictNullChecks: 严格的 null 与 undefined 检查, TypeScript 把 null 和 undefined 当做属于任何类型。 这就是说，声明为 number 类型的值可以为 null 和 undefined, 启用了 strictNullChecks, null 和 undefined 获得了它们自己各自的类型 null 和 undefined
noImplicitThis: 在类的外部使用 this 关键字时，它会默认获得 any 类型, 需要显式指定 this 为该类

lib: 编译过程中需要引入的库文件的列表。如果开发的是一个 NodeJS 应用，不希望有 DOM 的 API 的，因为运行时肯定会报错。可以在 tsconfig.json 中通过 lib 指定需要包含的 libs: string[]
默认注入的库和 target 有关
target: 指定 ECMAScript 目标版本 ES3(默认), ES5, ES6/ES2015, ES2016, ES2017, ESNext
module: 指定生成哪个模块系统代码, None, CommonJS, AMD, System, UMD, ES6, ES2015(默认值 target === "ES3" or "ES5" ? "CommonJS" : "ES6")
moduleResolution: 模块解析策略. 若未指定，那么在使用了 --module AMD | System | ES2015时的默认值为Classic, 其它情况时则为Node。

experimentalDecorators: 启用实验性的ES装饰器
allowSyntheticDefaultImports: 合成,允许从没有设置默认导出的模块中默认导入。这仅为了类型检查。
strictPropertyInitialization: ts2.7引入,更严格的类属性检查,要求每个实例的属性都有初始值，初始值既可以在 constructor 中设置,也可以在声明时设置
importHelpers: 从 tslib 导入辅助工具函数（比如 __extends继承, __assign展开运算, __rest等）
所有非相对模块导入都会被当做相对于 baseUrl
paths是相对于baseUrl进行解析
strict: strict标识在使用tsc --init新建的项目中是默认使用的, 等价于--noImplicitAny, --noImplicitThis, --alwaysStrict, --strictNullChecks, --strictFunctionTypes and --strictPropertyInitialization.
```

### files include exclude

```
files 指定一个包含相对或绝对文件路径的列表。
include 和 exclude 属性指定一个文件 glob 匹配模式列表。支持的 glob 通配符有:

* 匹配0或多个字符（不包括目录分隔符）
? 匹配一个任意字符（不包括目录分隔符）
**/ 递归匹配任意子目录

如果 files 和 include 都没有被指定，编译器默认包含当前目录和子目录下所有的 TypeScript 文件（.ts, .d.ts 和 .tsx），排除在 exclude 里指定的文件。
exclude 默认情况下会排除 node_modules，bower_components，jspm_packages 和<outDir>目录

默认所有可见的@types包会在编译过程中被包含进来。 node_modules/@types 文件夹下以及它们子文件夹下的所有包都是可见的; 即 ./node_modules/@types/, ../node_modules/@types/和../../node_modules/@types/等等.
若指定了 compilerOptions.typeRoots: string[], 只有 typeRoots 下面的包才会被包含进来.
若指定了 compilerOptions.types: string[]，只有被列出来的包才会被包含进来
```
