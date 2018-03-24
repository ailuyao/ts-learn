// Type definitions for cookies 0.7
// Project: https://github.com/pillarjs/cookies
// Definitions by: ailuyao <https://github.com/ailuyao>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.7

/**
 * Color
 */
type ColorParam = Color | string | { [key: string]: any };

interface Color {
  toString(): string;
  toJSON(): Color;
  apple(...args: number[]): Color;
}

interface ColorConstructor {
  (obj?: ColorParam): Color;
  new (obj?: ColorParam): Color;

  apple(...val: number[]): Color; //arguments, arrayLike
  apple(color: ColorParam): Color;
}

declare const Color: ColorConstructor;
// export = Color;

/**
 * Keygrip
 */
interface Keygrip {
  sign(data: any): string;
  verify(data: any, digest: string): boolean;
  index(data: any, digest: string): number;
  (port: number): Promise<number>; // then receive number
}

interface KeygripFunction {
  new (keys: string[], algorithm?: string, encoding?: string): Keygrip;
  (keys: string[], algorithm?: string, encoding?: string): Keygrip;
}

declare const Keygrip: KeygripFunction;

// export = Keygrip;

/**
 * React
 */
type Key = string | number;
type ReactText = string | number;
type ReactChild = ReactElement<any> | ReactText;
type ReactNode = ReactChild | string | number | boolean | null | undefined;

interface ReactElement<P> {
  type: string | ComponentClass<P> | SFC<P>;
  props: P;
  key: Key | null;
}
interface ReactChildren {
  map<T>(children: ReactNode, fn: (child: ReactChild, index: number) => T): T[];
  forEach(
    children: ReactNode,
    fn: (child: ReactChild, index: number) => void
  ): void;
  count(children: ReactNode): number;
  only(children: ReactNode): ReactElement<any>;
  toArray(children: ReactNode): ReactChild[];
}
type ComponentState = {};

type SFC<P = {}> = StatelessComponent<P>;
interface StatelessComponent<P = {}> {
  (props: P & { children?: ReactNode }, context?: any): ReactElement<
    any
  > | null;
  // propTypes?: ValidationMap<P>;
  // contextTypes?: ValidationMap<any>;
  // defaultProps?: Partial<P>;
  displayName?: string;
}

interface ComponentClass<P = {}> {
  new (props: P, context?: any): Component<P, ComponentState>;
  // propTypes?: ValidationMap<P>;
  // contextTypes?: ValidationMap<any>;
  // childContextTypes?: ValidationMap<any>;
  defaultProps?: Partial<P>;
  displayName?: string;
}

type ReactInstance = Component<any> | Element;

interface Element {}

interface ComponentLifecycle<P, S> {
  componentWillMount?(): void;

  componentDidMount?(): void;

  componentWillReceiveProps?(nextProps: Readonly<P>, nextContext: any): void;

  shouldComponentUpdate?(
    nextProps: Readonly<P>,
    nextState: Readonly<S>,
    nextContext: any
  ): boolean;

  componentWillUpdate?(
    nextProps: Readonly<P>,
    nextState: Readonly<S>,
    nextContext: any
  ): void;

  componentDidUpdate?(
    prevProps: Readonly<P>,
    prevState: Readonly<S>,
    prevContext: any
  ): void;

  componentWillUnmount?(): void;
}

interface Component<P = {}, S = {}> extends ComponentLifecycle<P, S> {}

declare class Component<P, S> {
  constructor(props: P, context?: any);

  setState<K extends keyof S>(
    state:
      | ((prevState: Readonly<S>, props: P) => Pick<S, K> | S)
      | (Pick<S, K> | S),
    callback?: () => void
  ): void;

  forceUpdate(callBack?: () => void): void;
  render(): ReactNode;

  props: Readonly<{ children?: ReactNode }> & Readonly<P>;
  state: Readonly<S>;
  context: any;
  refs: {
    [key: string]: ReactInstance;
  };
}

/**
 * lib.es5
 */
interface Array<T> {
  length: number;
  toString(): string;
  push(...items: T[]): number;
  pop(): T | undefined;
  concat(...items: (T[] | ReadonlyArray<T>)[]): T[];
  concat(...items: (T | T[] | ReadonlyArray<T>)[]): T[];
  join(separator?: string): string;
  reverse(): T[];
  // and so on ...
}

interface NativeArrayLike<T> {
  readonly length: number;
  readonly [n: number]: T;
}

/**
 * Make all properties in T optional
 */
type NativePartial<T> = { [P in keyof T]?: T[P] };

/**
 * Make all properties in T readonly
 */
type NativeReadonly<T> = { readonly [P in keyof T]: T[P] };

/**
 * From T pick a set of properties K
 * 从T选择一组属性值K
 */
type NativePick<T, K extends keyof T> = { [P in K]: T[P] };
