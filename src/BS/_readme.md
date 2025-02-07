
Bootstrap
===

## bs01 Using bootstrap

功能
* 將前一版的 course table 的所有 css 刪除，改用 bootstrap 來設計一個以手機介面為主的介面
* 手機介面 1row 介紹一個老師，一但大於 sm 的大小則呈現 3 個老師
* 使用 table, card, accordion 分別呈現課表，老師與課程介紹

[參考畫面](https://docs.google.com/presentation/d/1Zp_S4Fr0kIRSqC43Zaurx7eCJD3Sy2lBe4PRsF1cNpQ/edit#slide=id.g2ec06fdf57b_1_5)

學習
* container, container-fluid 等排版
* bootstrap-grid 的使用
* 使用 https://via.placeholder.com/200x220 來作為圖面設計的草稿

參考
* [bs01](course_table_bs01.html)
  * 延伸：老師資訊在呈現時，多加上 md, lg 等斷點，讓大尺寸的面板可以單行可以容納更多的項目。
  
## bs02 Tab

功能：
* 使用 Tab 呈現三個學期的課表
* 參考 [W3school](https://www.w3schools.com/bootstrap5/bootstrap_navs.php) > Toggleable / Dynamic Tabs 
* [參考畫面](https://docs.google.com/presentation/d/1Zp_S4Fr0kIRSqC43Zaurx7eCJD3Sy2lBe4PRsF1cNpQ/edit#slide=id.g2ec229f6371_0_0)

學習
* nav-tab, tab-content 及 tab-pane 的互動應用

## bs03 carousel & footer

功能
* 做一個輪盤來呈現首頁
* 製作一個 footer 來呈現版權 (參考 [bootstrap utility- flex](https://getbootstrap.com/docs/5.3/utilities/flex/))
* [參考畫面](https://docs.google.com/presentation/d/1Zp_S4Fr0kIRSqC43Zaurx7eCJD3Sy2lBe4PRsF1cNpQ/edit#slide=id.g2ec27fafde5_0_0)
* 延伸：
  * Google bootstrap footer 尋找更多的 footer 樣式，Try them!

學習
* 輪盤 carousel 的應用
* 輪盤指示器(indicator)、前後控制器(pre/next)、內容(inner, item、標題文字(caption)) 的使用
* 使用 bootstrap icon
* 使用 d-flex justify-content-around 來編輯畫面 (footer)

## Reference
* [Teach nlh slides](https://docs.google.com/presentation/d/1SVPYbflsByLxa8nzgt4jR0HHD5uRiElGk8mk_sJvd5w/edit#slide=id.g21899502337_0_0)
* [W3Schools Tutorials](https://www.w3schools.com/bootstrap5/index.php)
* [Bootstrap 5](https://getbootstrap.com/)

## bs04 More

功能
* 使用 Modal: 當點下老師的 profile 時，用 Modal 呈現老師的資訊。
* 使用 navbar: 在輪盤下方加上 navbar, 放上連結到 iecs, fcu, taichung 的連接。
* google bootstrap footer, 參考更多的 footer 樣式，豐富此網頁的設計。