
// 同上，用一個物件來儲存每一支股票的現價，計算出總共的市場價值


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

function computeCost(trans_list) {
    cost = 0;
    trans_list.forEach(t => {
        cost += t.price * t.quantity;
    });
    return cost;
}

function computeAsset(trans_list) {
    asset = {};
    for (trans of trans_list) {
        if (trans.type == '買') { // only concern the 'buy' case
            if (trans.name in asset)
                asset[trans.name] += trans.quantity;
            else asset[trans.name] = trans.quantity;
        }
    }
    return (asset);
    // asset example: {'TSMC': 2000, 'HH': 12000} 
}

function computeMarketValue(asset, current_price) {
    let value = 0
    for (s in asset) {
        quantity = asset[s];
        value += quantity * current_price[s];
    }
    return value;
}

transactions = [
    "1999/4/20 $200 買 台積電 1000股",
    "2001/9/10 $90 買 鴻海 2000股",
    "2003/6/19 $80 買 台灣大 4000股",
    "2003/6/20 $300 買 台積電 200股"];

trans_list = [];
transactions.forEach(t => {
    trans_list.push(parseObj(t));
});

console.log('My transaction list: ', trans_list);

cost = computeCost(trans_list);
console.log('My Cost: ', cost.toLocaleString());

current_price = {
    '台積電': 1000,
    '台灣大': 100,
    '鴻海': 200
}

assets = computeAsset(trans_list);
console.log('資產物件 assets：')
console.log(assets);

marketValue = computeMarketValue(assets, current_price);
console.log('Market value: ', marketValue.toLocaleString());

module.exports = { current_price, parseObj };