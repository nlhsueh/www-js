const person = {
    name: 'Alice',
    age: 30,
    sayHello() {
        s = `Hello, my name is ${this.name} and I am ${this.age} years old.`;
        console.log(s);
    }
};

class People {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHello() {
        s = `Hello, my name is ${this.name} and I am ${this.age} years old.`;
        console.log(s);
    }
}
person.sayHello();
nick = new People('nick', 30);
nick.sayHello();

albert = new People('Albert', 35);
albert.sayHello();