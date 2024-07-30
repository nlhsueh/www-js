

let s = 'I love javascript';

times = s.length;
while (times-- >= 0) {
    console.log(s);
    s = s.slice(1) + s[0];
}