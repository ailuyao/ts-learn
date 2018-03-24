interface JQueryElement {
  click(Function): JQueryElement;

  css(name: string): string;
  css(name: string, value: any): JQueryElement;
}

interface JQueryAjaxCallback {
  /**
   * @param data 服务器返回的数据
   * @param xhr 原始的 XMLHttpRequeset 对象
   */
  (data: any, xhr: XMLHttpRequest): void;
}

interface JQueryVariable {
  (callback: Function): void;
  (selector: string): JQueryElement;

  get(url: string, success: JQueryAjaxCallback);
  get(url: string, data: any, success: JQueryAjaxCallback);
}

declare var $: JQueryVariable;

// segmentfault
// 定义 jQuery 需要用到的类型命名空间
declare namespace jQuery {
  // 定义基本使用的类型
  type Selector = string;
  type TypeOrArray<T> = T | T[];
  type htmlString = string;
}

// 定义 jQuery 接口，jquery 是一个 包含 Element 的集合
interface JQuery<TElement extends Node = HTMLElement>
  extends Iterable<TElement> {
  length: number;
  eq(index: number): this;

  // 重载
  add(selector: jQuery.Selector, context: Element): this;
  add(
    selector:
      | jQuery.Selector
      | jQuery.TypeOrArray<Element>
      | jQuery.htmlString
      | JQuery
  ): this;

  children(selector?: jQuery.Selector): this;
  css(propertyName: string): string;
  html(): string;
}

// 对模块 jquery 输出接口
declare module 'jquery' {
  // module 中要使用 export = 而不是 export default
  export = jQuery;
}
