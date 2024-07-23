function showIndex(data) {
    console.log('in-- show the index: ')
    for (a in data) {
        console.log(a)
    }
}

function showContent(data) {
    console.log('of-- show the content: ')
    for (a of data) {
        console.log(a)
    }
}

const person = {
    name: 'Alice',
    age: 30,
};

fruit = ['apple', 'banana'];
hi = "Hi";

console.log('>> Show person object');
showIndex(person);
// showContent(person); ==> ERROR

console.log('>> Show fruit array');
showIndex(fruit);
showContent(fruit);

console.log('>> Show hi string');
showIndex(hi);
showContent(hi);

