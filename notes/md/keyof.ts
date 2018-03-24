/**
 * in 约束属性名
 */
type ChinaMobilePhones = '10086' | '10010' | '10000';

interface ChinaMobile {
  name: string;
  website: string;
}

// 只能 type 使用， interface 无法使用
export type ChinaMobileList = { [phone in ChinaMobilePhones]: ChinaMobile };

/**
 * keyof 约束方法的参数
 */
declare namespace MyLibrary {
  type keys = {
    name: string;
    appId: number;
    config: object;
  };
  class Application {
    // 参数和值约束范围
    set<T extends keyof keys>(key: T, val: keys[T]);
    get<T extends keyof keys>(key: T): keys[T];
  }
}
