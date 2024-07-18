
buy_tsmc = "$200 2000 # $250 2000 # $300 2000";

tradeList = buy_tsmc.split(' # ');
for (trade of tradeList) {
    let price = trade.split(' ')[0].slice(1);
    price = parseInt(price);
    let quantity = parseInt(trade.split(' ')[1]);
    console.log(`買了 ${quantity} 股，價格 ${price}`)
}
