
// 依據交易字串產生股票物件

const Stock = require('./stock02d');

function parseObj(transaction_str) {
    const t_list = transaction_str.split(" ");
    t_object = {};
    t_object.date = t_list[0];
    t_object.price = parseInt(t_list[1].slice(1));
    t_object.type = t_list[2];
    t_object.name = t_list[3];
    t_object.quantity = parseInt(t_list[4].slice(0, -1));
    return t_object;
}

stocks = {};

// 依據交易紀錄，產生每隻股票的資訊，包含交易紀錄, 剩餘數量, 獲利等
function genStockInfo(transList) {
    for (trans of transList) {
        s_name = trans.name;
        if (s_name in stocks) {
            stock = stocks[s_name];
            stock.history.push(trans);
            if (trans.type == "買") {
                stock.share += trans.quantity;
                stock.asset_stack.push({ "price": trans.price, "share": trans.quantity });
            }
            else { // 賣
                let q = trans.quantity; // 要扣的量
                if (stock.share >= q) { // 存量要夠
                    stock.share -= q;
                    for (const asset of stock.asset_stack) {
                        left = asset.share - q;
                        stock.revenue += (trans.price - asset.price) * q;
                        if (left > 0) {
                            asset.share -= q;
                            break;
                        } else { // prepare to move to next
                            q = q - asset.share;
                            asset.share = 0;
                        }
                    }
                    // 清除已沖銷的買賣交易
                    stock.asset_stack = stock.asset_stack.filter(x => x.share > 0);
                }
                else {
                    console.log('存貨不夠多，想賣太多');
                }
            }
        }
        else { // meet the new stock
            stocks[s_name] = new Stock(s_name, trans);
        }
    }
    // console.log(stocks);
}

s = [
    "1999/4/20 $200 買 台積電 1000股",
    "2001/9/10 $90 買 鴻海 2000股",
    "2003/6/19 $80 買 台灣大 4000股",
    "2003/6/18 $300 買 台積電 2000股",
    "2003/6/20 $300 買 台積電 200股",
    "2010/6/21 $600 賣 台積電 200股",
    "2010/6/22 $800 賣 台積電 200股",
    "2011/7/19 $100 賣 台灣大 4000股",
    "2011/7/19 $101 買 台灣大 1000股",
];

// s1 = ["1999/4/20 $200 買 台積電 1000股"];

translationList = [];
s.forEach(element => {
    translationList.push(parseObj(element));
});

// console.log(trades);

genStockInfo(translationList);

// console.log(stocks);

for (s in stocks) {
    console.log('=====', s);
    console.log(stocks[s].toString());
}

module.exports = { stocks, genStockInfo };