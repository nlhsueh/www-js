let s = 'hello, world';
console.log(s);
console.log(s.length);

console.log(s.split('').reverse().join(''))

let s2 = s.toUpperCase();
console.log(s2)
console.log(s)

s = 'asdf asdfa asfsd'
console.log(s.includes('Hello'))
// s2 = s[0].toUpperCase() + s.slice(1)
// s2 = s.charAt(0).toUpperCase() + s.slice(1)
s2 = s.substring(0).toUpperCase() + s.substring(1)
// s2 = s.capitalize()
console.log(s2)