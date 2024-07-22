
// 依據交易字串產生股票物件

const stocks = require('./stock02e');
genStockInfo = require('./stock02e');
current_price = require('./stock02c');

function computeMarketValue(stocks, current_price) {
    let value = 0;
    for (stack_name in stocks) {
        console.log(stocks[stack_name].toString());
        assets = stocks[stack_name].asset_stack;
        for (asset of assets) {
            quantity = asset['share'];
            price = current_price[stock.name];
            value += quantity * price;
        }
    }
    return value;
}

let value = computeMarketValue(stocks, current_price);

console.log(value.toLocaleString());