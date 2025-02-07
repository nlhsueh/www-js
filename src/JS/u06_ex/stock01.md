
## Stock 01 Exercise

### stock 01a - 買股票

以下表示一個人的買賣紀錄，以及目前的價格。每筆交易用 # 分開，每筆交易可以包涵價格與數量。current_tsmc 表示目前的價格。

```
buy_tsmc = "$200 2000 # $250 2000 # $300 2000";
current_tsmc = 1035;
```

請輸出他的買賣歷程，如：
```
買了 2000 股，價格 200
買了 2000 股，價格 250
買了 2000 股，價格 300
```

學習：
* 字串處理 `split()`, `slice()`
* `for ... of ...` 來瀏覽陣列元素
* `parseInt()` 將字串轉型為 int
* string template 的應用 `${ }`

Hint: [stock01a.js](stock01a.js)

### stock 01b - 價格與數量的陣列

Do:
* 宣告 `priceList`, `quantityList` 兩個陣列，延續上一題，在處理的過程中，把價格和數量存到這兩個陣列中

Learn:
* array 的宣告
* `array.push()`

Output:
```
買了 2000 股，價格 200
買了 2000 股，價格 250
買了 2000 股，價格 300
價格： [ 200, 250, 300 ]
數量： [ 2000, 2000, 2000 ]
```

Hint: [stock01b.js](stock01b.js)

### stock 01c - 獲利

Do:
* 同上，宣告一個 function `showProfit(str_trade, current_price)`, 來處理股票買賣的訊息。
* 依據現價計算預估的獲利金額與獲利率

Learn:
* function 的宣告與呼叫
* loop 與 total 的應用
* `.toFixed()` 計算小數點
* `.toLocaleString()` 呈現千分號

Input:
```
buy_tsmc = "$200 2000 # $250 2000 # $300 2000";
current_price = 1035;
```

Output:
```
買了 2000 股，價格 200
買了 2000 股，價格 250
買了 2000 股，價格 300

成本: 1,500,000
現價：1035
獲利： 4,710,000
獲利率： 214.00%
```

Hint: [stock01c.js](stock01c.js)

### stock 01d - 回呼函式

Do:
* 上述程式碼改為 `array.forEach` 的方式進行
* 透過回呼函式（callback function）來處理每一筆交易
* 使用 `map()` 來將陣列中每一個字串轉為整數 (`parseInt`)

```
  tradeList.forEach(...
```
Hint: [stock01d.js](stock01d.js)

### stock 01e - 賣股票

Do:
* 交易的數量可以是負的，表示賣出

```
const buy_tsmc = "$200 2000 # $250 2000 # $300 -2000";
```

Output：
```
總成本: 900,000
預估現值: 2,000,000
實際獲利: 150,000
預估獲利: 1,550,000
預估獲利率: 172.22%
```

Hint: [stock01e.js](stock01e.js)
