
// 使用物件來紀錄交易
// 透過解析這個交易物件，印出交易資訊

let b1, b2, b3, transaction;

function setData() {
    b1 = {
        'name': '台積電',
        'date': '1999/4/20',
        'price': 200,
        'quantity': 1000,
        'type': '買'
    }

    b2 = {
        'name': '鴻海',
        'date': '2001/9/10',
        'price': 90,
        'quantity': 2000,
        'type': '買',
    }

    b3 = {
        'name': '台灣大',
        'date': '2003/6/19',
        'price': 80,
        'quantity': 4000,
        'type': '買',
    }

    transaction = [b1, b2, b3];
}

setData();
console.log(transaction);
console.log("== 用 for ... of ... ==");
for (t of transaction) {
    console.log(`${t.date}日 以 ${t.price}元 ${t.type} ${t.name} 股票 ${t.quantity} 股`);
}

console.log("== 用 forEach ==");
transaction.forEach(t => {
    console.log(`${t.date}日 以 ${t.price}元 ${t.type} ${t.name} 股票 ${t.quantity} 股`);
});

module.exports = { transaction, setData };
