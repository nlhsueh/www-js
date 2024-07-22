
// 同上一題，計算總成本

const { setData, transaction } = require("./stock02a");

setData();

function computeCost01() {
    console.log("== 用 for ... of ... ==");
    let tot_cost = 0;
    for (t of transaction) {
        console.log(`${t.date}日 以 ${t.price}元 ${t.type} ${t.name} 股票 ${t.quantity} 股`);
        tot_cost += t.price * t.quantity;
    }
    return (tot_cost);
}

function computeCost02() {
    console.log("\n== 用 reduce ==");
    tot_cost = transaction.reduce((acc, t) => {
        console.log(`${t.date}日 以 ${t.price}元 ${t.type} ${t.name} 股票 ${t.quantity} 股`);
        return acc + t.price * t.quantity;
    }, 0);
    return (tot_cost);
}

console.log(`總成本為：${computeCost01().toLocaleString()}`);



console.log(`總成本為：${computeCost02().toLocaleString()}`);