

## BMI example

### BMI 01 

Do
* 設計一個表單可以輸入人的姓名、身高、體重，按下「BMI」就會計算他的 BMI 身體衡量指數，呈現在下方。
* 可以不斷地輸入，下方會持續的呈現資料。
* 分別用 name, height, weight, bmi 的陣列來儲存上述的資料
* 用一個物件資料來儲存一個人的上述資料

Learn
* 資料的運算
* 陣列的運用
* 物件的應用
* 網頁三兄弟（HTML/CSS/JS）的互動

### BMI 02

Do
* 統計面板：可以分別呈現 BMI 太小，太大以及正常的人。
* 輸入面板：改上 v01 的版本，資料的輸入儘量「少打字，多用選的」。設計一個「隨機輸入」的按鈕，自動生成隨意資料，以方便做測試。
* 設計一個切換的按鈕，可以在輸入與統計之間切換面板
* 改用 Map 來記錄人的資料，共宣告 persons, over_persons, under_persons, normal_persons 等四個 Map 物件，以人的姓名為 key, [h, w, bmi] 為 value。方便在呈現統計時，直接互叫這個物件來呈現。 

Learn
* Map 的應用
* 面板的 show/hide