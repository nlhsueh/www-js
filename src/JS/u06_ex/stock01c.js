
function showProfit(str_trade, current_price) {
    let tradeList = str_trade.split(" # ");
    let cost = 0, totQuantity = 0;

    for (trade of tradeList) {
        let price = trade.split(' ')[0].slice(1);
        price = parseInt(price);
        let quantity = parseInt(trade.split(' ')[1]);
        cost += (quantity * price);
        totQuantity += quantity;
        console.log(`買了 ${quantity} 股，價格 ${price}`)
    }

    let currentValue = totQuantity * current_price;
    let profit = currentValue - cost;
    let profitRate = (profit / cost - 1) * 100;

    console.log(`\n成本: ${cost.toLocaleString()}`);

    console.log(`現價：${current_price}`);

    console.log(`獲利： ${profit.toLocaleString()}`);

    console.log(`獲利率： ${profitRate.toFixed(2)}%`);
}

buy_tsmc = "$200 2000 # $250 2000 # $300 2000";
current_price = 1035;

showProfit(buy_tsmc, current_price);