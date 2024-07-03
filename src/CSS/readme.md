## v01 基本課表

功能：
* 輸入姓名，選擇學年度後，按下提交就可以設定次標題，次標題包含姓名與學年度
* 呈現課表
* 排版：整體風格要置中

[畫面示意圖](https://docs.google.com/presentation/d/1Zp_S4Fr0kIRSqC43Zaurx7eCJD3Sy2lBe4PRsF1cNpQ/edit#slide=id.g2751abaa62a_0_0)

學習：
* 了解 html/table/css 的運作
* 了解 javascript 的運作，放置位置的差異
* 了解 button type 的差異（submit/button）
* 透過設定 onload() 來觀察 button click 的差異
* 了解 border 設定的方式 (必須寬度、型態與顏色)

[參考程式](course_table_v01.html)
* 有 bug, 要修

## v02 老師的呈現

功能：
* 改善 v01, 修復 bug
* 點擊 Show/Hide 可以切換課表的呈現
* 老師和課程名稱用不同的 CSS class 來呈現，透過 CSS 設定老師的呈現方式（較小、藍字）

[畫面示意圖](https://docs.google.com/presentation/d/1Zp_S4Fr0kIRSqC43Zaurx7eCJD3Sy2lBe4PRsF1cNpQ/edit#slide=id.g2751abaa62a_0_7)

學習：
* 認識各種不同的 CSS selectors，及其應用
* 透過 div 建立群組元素，並透過 display 的設定與 JS 的程式控制來切換呈現

[參考程式](course_table_v02.html)


## v03 課程介紹

功能
* 每個課程有課程名稱、描述、圖片、列表描述的評分百分比，請每一個都用一個 class selector; 課程描述也有一個 'course_intro' 的 class selector 
* 課程描述，可用 lorem 套件產生; 圖片可以用 picsum 隨機產生
* 透過 CSS 的功能設定，讓課程介紹頁具備彈性修改，並且一致。例如課程名稱統一顏色大小，描述同一顏色大小等。
* 透過 float 讓圖片與文字產生文繞圖的效果。

[畫面示意圖](https://docs.google.com/presentation/d/1Zp_S4Fr0kIRSqC43Zaurx7eCJD3Sy2lBe4PRsF1cNpQ/edit#slide=id.g2751abaa62a_0_19)

學習
* picsum 和 lorem 的使用
* combinator selector 的應用
* float 的應用（文繞圖）
* 了解 margin 的設定方式

[參考程式](course_table_v03.html)

## v04 老師介紹

功能
* 每個都以類似卡片的方式呈現，包含老師的照片（請上系網抓），下方或旁邊有姓名，專長，連接等資訊。卡片有外框。 
* 一行可以有 2-3 個老師。

[畫面示意圖](https://docs.google.com/presentation/d/1Zp_S4Fr0kIRSqC43Zaurx7eCJD3Sy2lBe4PRsF1cNpQ/edit#slide=id.g2751abaa62a_0_24)

學習

