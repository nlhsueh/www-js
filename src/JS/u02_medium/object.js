

john = {};
john.name = 'John'
john.age = 20
x = 'addr';
john[x] = 'Taichung';

console.log('Type of john is: ', typeof (john));
console.log('Key (attr) of john is: ', Object.keys(john));

console.log('They dont have the same attributes');
allen = { 'name': 'Allen', 'age': '30', 'home': 'Taipei' };
console.log('Type of allen is: ', typeof (allen));
console.log('Key (attr) of allen is: ', Object.keys(allen));