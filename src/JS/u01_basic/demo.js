

nick = { name: 'Nick', height: 172, weight: 67 };
jie = { name: 'Jie', height: 177, weight: 65 };
albert = { name: 'Albert', height: 176, weight: 72 };
people = [nick, jie, albert];

people.forEach(p => {
    console.log(`${p.name} 的 BMI 是 ${p.weight / ((p.height * p.height) / 10000)}`);
});

people.sort((p, q) => p.height - q.height);

console.log(people);