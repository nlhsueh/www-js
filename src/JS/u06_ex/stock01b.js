
buy_tsmc = "$200 2000 # $250 2000 # $300 2000";

priceSet = [];
quantitySet = []
tradeList = buy_tsmc.split(' # ');
for (trade of tradeList) {
    let price = trade.split(' ')[0].slice(1);
    price = parseInt(price);
    let quantity = parseInt(trade.split(' ')[1]);

    priceSet.push(price);
    quantitySet.push(quantity);
    console.log(`買了 ${quantity} 股，價格 ${price}`)
}

console.log('價格：', priceSet);
console.log('數量：', quantitySet);