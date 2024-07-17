const transactions = "1 1000,2 1000,3 2000,3 3000";
const currentPrice = 4;

const transactionList = transactions.split(',');

// 計算總成本和總收益
let totalCost = 0;
let totalShares = 0;
let soldRevenue = 0;
let costOfSoldShares = 0;

transactionList.forEach(transaction => {
    const [price, quantity] = transaction.split(' ').map(Number);
    if (quantity > 0) {
        totalCost += price * quantity; // 總成本：買股票花費總金額
        totalShares += quantity;
    } else {
        const soldQuantity = Math.abs(quantity);
        soldRevenue += price * soldQuantity; // 賣出的收益
        totalShares -= soldQuantity; // 剩下的股票數

        // 計算賣出股票的成本
        costOfSoldShares += (totalCost / (totalShares + soldQuantity)) * soldQuantity;
    }
});

const estimatedValue = totalShares * currentPrice; // 預估現值=剩餘股數*現價
const profit = soldRevenue - costOfSoldShares; // 淨收益=收益-賣出的成本
// 預估淨收益=預估現值-(總成本-賣出的成本)
const estimatedProfit = estimatedValue - (totalCost - costOfSoldShares);
const estimatedProfitRate = (estimatedProfit / totalCost) * 100;

console.log(`總成本: ${totalCost}`);
console.log(`預估現值: ${estimatedValue}`);
console.log(`實際獲利: ${profit}`);
console.log(`預估獲利: ${estimatedProfit}`);
console.log(`預估獲利率: ${estimatedProfitRate.toFixed(2)}%`);
