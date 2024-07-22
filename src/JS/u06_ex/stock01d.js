

function showProfit(str_trade, current_price) {
    // remove $
    str_trade = str_trade.split('$').join('')
    const tradeList = str_trade.split(' # ');

    let cost = 0;
    let totQuantity = 0;

    tradeList.forEach(trade => {
        const [price, quantity] = trade.split(' ').map(s => parseInt(s));
        cost += (quantity * price);
        totQuantity += quantity;
        console.log(`買了 ${quantity} 股，價格 ${price}`)
    });
    let currentValue = totQuantity * current_price;
    let profit = currentValue - cost;
    let profitRate = (profit / cost - 1) * 100;

    console.log(`\n成本: ${cost.toLocaleString()}`);
    console.log(`現價：${current_price}`);
    console.log(`獲利： ${profit.toLocaleString()}`);
    console.log(`獲利率： ${profitRate.toFixed(2)}%`);
}

const buy_tsmc = "$200 2000 # $250 2000 # $300 2000";
const currentPrice = 1000;
showProfit(buy_tsmc, currentPrice)
