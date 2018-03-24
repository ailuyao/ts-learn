class Person {
  constructor(public name: string, public age: number) {
    console.log('Person');
  }

  getGreeting() {
    return 'Hi ' + this.name;
  }
}

new Person('lilei', 18);
