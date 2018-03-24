// TypeScript中的类与ES2015几乎是一样的, 主要区别是在于类成员的访问修饰符

/**
 * 访问修饰符
   public: TS中成员默认都为 public(C#等语言则需要显式的规定),可以省略不写, 类内外可以自由访问
   private: 不能在声明它的类的外部访问
   protected: 不能在声明它的类的外部访问, 但在派生子类中可以访问
   readonly: 只读属性必须在声明时或构造函数里被初始化
 */
class IUser {
  readonly id: number;

  // _name 访问修饰符设置为 private, 这样无法在外部随意访问
  // 利用gets/set存取器来进行有条件的访问和修改值
  // 当设置 _name 属性值的时候, 需要进行简单的验证
  private _name: string;
  get name(): string {
    return this._name;
  }
  set name(name: string) {
    this._name = name;
  }

  constructor(id: number, userName: string) {
    this.id = id;
    this._name = userName;
  }

  // 实例方法
  getUserName() {
    console.log(`name: ${this._name}`);
  }

  // 静态方法(类方法)
  static print() {
    console.log('static method');
  }
}

const userInstance = new IUser(1, 'luyao');
userInstance.getUserName();

/**
 * 参数属性
   属性的声明放在构造函数参数中, 创建类对象实例时, 通过传参初始化
 */
class IAuth {
  // public token: string;
  constructor(public token: string) {}

  getToken() {
    console.log(`${this.token}`);
  }
}

const authInstance = new IAuth('base64');
authInstance.getToken();

/**
 * abstract 抽象类
   抽象类做为其它派生类的基类使用, 它们一般不会直接被实例化
   不同于接口, 抽象类可以包含成员的实现细节
   abstract关键字是用于定义抽象类和在抽象类内部定义抽象方法
   抽象类中的抽象方法不包含具体实现并且必须在派生类中实现
   抽象方法的语法与接口方法相似, 两者都是定义方法签名但不包含方法体
   但是,抽象方法必须包含abstract关键字并且可以包含访问修饰符
   {} 比 Object 靠谱
 */
abstract class BaseComp {
  abstract getOpts(): void;

  constructor(public options: {}) {}
}

class SubComp extends BaseComp {
  constructor(cfg: {}) {
    super(cfg);
  }

  getOpts() {
    console.log(`${this.options}`);
  }
}

const absInstance = new SubComp({ city: 'hangzhou' });
absInstance.getOpts();
