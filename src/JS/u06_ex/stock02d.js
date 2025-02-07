
/**
 * 宣告一個股票物件，裡面包涵買賣歷程等相關資訊。
 * 設計一個 Stock 的類別，(stock_name, trade) 來建立相關的屬性。其中 trade 為第一筆交易。
 */

tsmc01 = {
    'name': 'TSMC',
    'history': [
        {
            name: '台積電',
            date: '1999/4/20',
            price: 200,
            quantity: 1000,
            type: '買'
        },
        {
            name: '台積電',
            date: '2003/6/19',
            price: 300,
            quantity: 2000,
            type: '買'
        }
    ],
    'asset_stack': [
        { 'price': 200, 'share': 1000 },
        { 'price': 300, 'share': 2000 }
    ],
    'share': 3000
}

// tsmc01 賣了400股之後
tsmc02 = {
    'name': 'TSMC',
    'history': [
        {
            name: '台積電',
            date: '1999/4/20',
            price: 200,
            quantity: 1000,
            type: '買'
        },
        {
            name: '台積電',
            date: '2003/6/19',
            price: 300,
            quantity: 2000,
            type: '買'
        },
        {
            name: '台積電',
            date: '2005/6/19',
            price: 1000,
            quantity: 400,
            type: '賣'
        }
    ],
    'asset_stack': [
        { 'price': 200, 'share': 600 }, // 第一筆數量 -400
        { 'price': 300, 'share': 2000 }
    ],
    'revenue': 320000, // 產生收益：400*(1000-200)
    'share': 2600 // 剩餘股數：1000-400
}

class Stock {
    // will be created when first buy
    constructor(name, trade) {
        this.name = name;
        this.revenue = 0; // 有賣出後的收益累計
        this.history = [trade]; // 交易紀錄
        this.asset_stack = [{ "price": trade.price, "share": trade.quantity }]; // 交易後的資產堆疊
        this.share = trade.quantity; // 剩餘股數
    }

    toString() {
        let r = `股票：${this.name}`;
        r += `\n交易紀錄：\n`;
        for (let t of this.history) {
            r += `  $${t.price}, ${t.type}, ${t.quantity}股, ${t.date}`;
        }
        r += `\n現存資產堆疊：\n`;
        for (let t of this.asset_stack) {
            r += `  $${t.price}, ${t.share}股`;
        }
        r += `\n獲利：${this.revenue.toLocaleString()}`;
        r += `\n剩餘股數：${this.share.toLocaleString()}`;
        return r;
    }
}

tsmc_stock_01 = new Stock('TSMC',
    {
        name: '台積電',
        date: '1999/4/20',
        price: 200,
        quantity: 1000,
        type: '買'
    },
)

console.log(tsmc_stock_01.toString());

module.exports = Stock;