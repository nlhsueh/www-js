## v01 基本課表

功能：
* 輸入姓名，選擇學年度後，按下提交就可以設定次標題，次標題包含姓名與學年度
* 呈現課表
* 排版：整體風格要置中

[畫面示意圖](https://docs.google.com/presentation/d/1Zp_S4Fr0kIRSqC43Zaurx7eCJD3Sy2lBe4PRsF1cNpQ/edit#slide=id.g2751abaa62a_0_0)

學習：
* 了解 html/table/css 的運作
* 了解 javascript 的運作，放置位置的差異
* 了解 輸入表單元件，如 text, select 元件應用
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
* 在課表下方呈現老師的資訊，請依據 [course_table_v04.html](course_table_v04.html) 進行修改。
* 每個都以類似卡片的方式呈現，包含老師的照片（請直接連擊系網 img src），下方或旁邊有姓名。卡片有外框。 
* 一行有 3 個老師。
* 每個圖片的寬度調整成等寬，但因為高度有些許不同，請採取上下對齊的預設方式（因此下方會不對齊）
* 同一排名字應該是對齊的

[畫面示意圖](https://docs.google.com/presentation/d/1Zp_S4Fr0kIRSqC43Zaurx7eCJD3Sy2lBe4PRsF1cNpQ/edit#slide=id.g2ea2ad38908_0_0)

學習
* float 的應用
* position 的應用：relative 及 absolute
* 卡片的排列呈現設計

[參考程式](course_table_v04r.html)

延伸
* 多放一些老師的資訊，例如 email, 專長等

## v05 flex 排版

功能
* 採用 flex 作為排版的容器，放入標題、課表、老師介紹與課程介紹
* 老師的介紹卡長寬固定，當視窗寬度變動的時候，每一row能放的元素隨之變化。
  * 變化：每一 row 的最大寬度為 1200px;
* 課程介紹之排版：採用 column 的方向配置，每個課程的最大寬度不會超過 800px;
* 減少 class 的宣告，透過 flex 下的元件設定，來設定每一個項目的呈現
* 應用 border-radius 來設定圖片的編框，使之有弧度。其中課程圖片的呈現變成圓形。

學習
* flex 的應用
* border-radius 的應用
* CSS combinator selector 的應用

[畫面示意圖](https://docs.google.com/presentation/d/1Zp_S4Fr0kIRSqC43Zaurx7eCJD3Sy2lBe4PRsF1cNpQ/edit#slide=id.g2eabbffc021_0_0)

[參考程式](course_table_v05.html)

延伸
* 改變 justify-content 及 align-items 來觀察變化

## v06 響應

功能
* 當視窗小於 800px 時，課程介紹的圖片消失; 反之則呈現
  * 變化：圖片變小不消失
* 設定一個 banner 的 class 放置標題。

學習
* @media 的應用：響應式設計
* 簡易橫幅製作
 
[畫面示意圖](https://docs.google.com/presentation/d/1Zp_S4Fr0kIRSqC43Zaurx7eCJD3Sy2lBe4PRsF1cNpQ/edit#slide=id.g276ceb70b74_0_0)

[參考程式](course_table_v06.html)

## v07 轉移

功能
* 當游標移到老師的圖片時，圖片變暗，同區域出現老師的介紹（用 loren 產生字），若字太多，可以捲軸來閱讀。
* 同上，當游標移出該區域時，恢復原狀

學習
* image opacity
* transition