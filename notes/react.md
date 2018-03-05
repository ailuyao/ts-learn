### 固有元素和基于值的元素

```
#固有元素使用接口 JSX.IntrinsicElements
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any; // 捕获字符串的索引
      i: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>; //@types/react
    }
  }
}

#基于值的元素
无状态函数组件(SFC): 返回值类型 JSX.Element
类组件: 元素类的类型 和 元素实例的类型
元素类的类型: 类名
元素实例的类型: 类类型 调用签名(函数调用)的返回值 与 构造签名react-render返回值的联合类型
元素的实例类型必须赋值给 JSX.ElementClass或抛出一个错误。
```

属性类型检查

```
#固有元素
JSX.IntrinsicElements属性的类型

#基于值的元素
JSX.ElementAttributesProperty

JSX.ElementChildrenAttribute 来决定 children名
```

### react

[HTMLElement](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement)

```
interface HTMLAttributes<T> extends DOMAttributes<T> { }

合成事件
interface MouseEvent<T> extends SyntheticEvent<T> { }
```
