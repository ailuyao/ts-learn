## Typescript

### 安装

```bash
node -v
npm -v
sudo npm i -g typescript
tsc -v
babel-core babel-loader babel-preset-env babel-preset-react ts-loader webpack webpack-dev-server

sudo npm i -g ts-node
#ts-node 可以通过命令直接执行 *.ts 文件
ts-node demo.ts
```

### 配置 tsconfig.json

tsconfig.json 是 TypeScript 的编译选项文件, 配置它来定制 TypeScript 的编译细节直接调用 tsc, 编译器会从当前目录开始去查找 tsconfig.json 文件, 逐级向上搜索父目录调用`tsc -p`, 可以指定一个包含 tsconfig.json 文件的目录进行编译。如果没有找到 tsconfig.json 文件,TypeScript 会编译每个文件并在对应文件的同级目录产出

mkdir dirName && cd dirName
tsc --init # Initializes a TypeScript project and creates a tsconfig.json file
code .

```json
{
  "compilerOptions": {
    "module": "es6", // 生成 ES2015 模块代码
    "target": "es6", // 编译成 ES2015
    "allowSyntheticDefaultImports": true,
    "baseUrl": "src", // 可以相对这个目录 import 文件
    "sourceMap": true, // 生成 sourcemaps
    "outDir": "ts-build", // 构建输出目录
    "jsx": "preserve",
    "strict": true,
    // 支持装饰器
    "experimentalDecorators": true,
    // 装饰器元数据, npm i reflect-metadata --save
    "emitDecoratorMetadata": true
  },
  "exclude": ["node_modules"]
}
```

tsc -p FILE OR DIRECTORY, --project FILE OR DIRECTORY # Compile the project given the path to its configuration file, or to a folder with a 'tsconfig.json'.

### 配置 .vscode/task.json

在 vscode 中配置编译任务
[tasks](https://code.visualstudio.com/docs/editor/tasks)

任务支持只有在工作空间文件夹时才可用。在编辑单个文件时是不可用的。自动化如 linting、构建、打包、测试或部署软件通过 command+shift+B 执行任务 task, 调用 tsc 命令来编译 typescript
tsc 命令会查找当前目录的 tsconfig.json 配置来编译 typescript

```
{
  // See https://go.microsoft.com/fwlink/?LinkId=733558
  // for the documentation about the tasks.json format
  "version": "2.0.0",
  "tasks": [
    {
      "type": "typescript",
      "tsconfig": "tsconfig.json",
      "option": "watch",
      "problemMatcher": [
        "$tsc-watch"
      ]
    }
  ]
}
//node
{
  "version": "2.0.0",
  "tasks": [
    {
      // npm 命令
      "type": "npm",
      // npm run 的脚本
      "script": "build-ts",
      // 标签
      "label": "build-typescript",
      // 默认任务
      "group": {
        "kind": "build",
        "isDefault": true
      }
    }
  ]
}
```

### 配置 .vscode/launch.json debug

需要在 tsconfig.json 里打开 sourceMap 选项

```
{
  "version": "0.2.0",
  "configurations": [
    {
      // 调试之前运行的任务(task), 即上面编译任务中的 label
      "preLaunchTask": "build-typescript",
      // 调试任务名称
      "name": "server debug",
      "env": {
        // 传递的参数
        "NODE_ENV": "development"
      },
      // 调试的 node 入口文件，注意 tsconfig.json 里面要打开 sourceMap
      "program": "${workspaceRoot}/output/app.js"
    }
  ]
}
```

### node

[DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped)
若编译一个 Node 项目, 先安装 Node 编译依赖: npm i @types/node --save-dev, 否则会出现 Node 内置模块无法找到的情况

通过 npm scripts 脚本组合, 编译 typescript
项目目录

```
|---output # 编译输出
|---client
|---server # node ts 文件目录
      |--tsconfig.json
|---package.json
```

package.json

```
"scripts": {
  "dev": "nodemon --ext ts --watch server --exec \"npm run clean && npm run build:ts && npm run server\"",
  "server": "cross-env NODE_ENV=development node ./output/app.js",
  "clean": "rm -rf ./output.server",
  "build:ts": "tsc -p ./server",
  "build": "npm run clean && npm run build:ts"
}
```

### tslint

`sudo npm i tslint -g`

使用 eslint 规则
`npm install --save-dev tslint-eslint-rules`

配合 prettier 使用
`npm install -D tslint-config-prettier`

### 构建工具集成

[构建工具集成](https://tslang.cn/docs/handbook/integrating-with-build-tools.html)

### 元数据反射

反射, 就是在运行时动态获取一个对象的一切信息: 方法/属性等等, 特点在于动态类型反推导。在 TypeScript 中, 反射的原理是通过设计阶段对对象注入元数据信息, 在运行阶段读取注入的元数据, 从而得到对象信息。

反射可以获取对象的:
对象的类型成员/静态属性的信息(类型)
方法的参数类型、返回类型(参数名是获取不到的)

TypeScript 为使用了装饰器的代码声明注入了 3 组元数据:
design:type: 成员类型
design:paramtypes: 成员所有参数类型
design:returntype: 成员返回类型

### 装饰器(注解)

装饰器能装饰在类、方法、属性和参数上, 但不能只装饰在函数上！

对于静态成员来说是类的构造函数，对于实例成员是类的原型对象
