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

console.log('=== Using object directly ===');
person.sayHello();

console.log('=== Creating objects from classes ===');
nick = new People('nick', 30);
nick.sayHello();

albert = new People('Albert', 35);
albert.sayHello();