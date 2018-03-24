## ts-learn

TypeScript Leanning Note

### compile

```
sudo npm i -g typescript
tsc -p "./tsconfig.json"
```

[online coding](https://www.typescriptlang.org/play/)

### d.ts

[DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped)

* curl <br />
  curl https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/master/types/jquery/index.d.ts -o index.d.ts

* 使用 @types 管理声明第三方文件(无需 typings 或 tsd) <br />
  `npm install @types/jquery --save-dev`
* VSCode 扩展 types-autoinstaller <br />
  /Applications/Visual Studio Code.app/Contents/Resources/app/extensions/node_modules/typescript/lib

#### typings 和 tsd

实现代码智能提示功能,
typings 是作为 tsd 的替代者而出现(typings.json, tsd.json)

```
npm uninstall -g tsd #tsd 已不推荐使用
npm uninstall -g typings #typings 已不推荐使用, 推荐使用 npm 管理类型定义文件
```

### error detail

[ts error detail](https://www.tslang.cn/docs/handbook/error.html)

### VSCode

[Variables Reference](https://code.visualstudio.com/docs/editor/variables-reference)
