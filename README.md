# 餐廳清單
此餐廳清單可收藏了最喜歡的餐廳，除了可以看到餐廳的詳細資訊，還可以透過餐廳名稱或餐廳類別來找到特定的餐廳，且能新增餐廳、修改餐廳資訊、刪除餐廳與設定餐廳排序

## 專案畫面
![register](https://github.com/aziz0916/restaurant_list_s3_a1/blob/main/public/images/register.png)
![login](https://github.com/aziz0916/restaurant_list_s3_a1/blob/main/public/images/login.png)
![Index](https://github.com/aziz0916/restaurant_list_s3_a1/blob/main/public/images/index.png)
![Detail](https://github.com/aziz0916/restaurant_list_s3_a1/blob/main/public/images/detail.png)
![New](https://github.com/aziz0916/restaurant_list_s3_a1/blob/main/public/images/new.png)
![Edit](https://github.com/aziz0916/restaurant_list_s3_a1/blob/main/public/images/edit.png)
![Sort](https://github.com/aziz0916/restaurant_list_s3_a1/blob/main/public/images/sort.png)

## 專案功能
1. 使用者可以在註冊頁進行帳號註冊
2. 使用者可以在登入頁進行帳號登入
3. 使用者可以在首頁看到所有餐廳與它們的簡單資料：
   + 餐廳照片
   + 餐廳名稱
   + 餐廳分類
   + 餐廳評分
4. 使用者可以再點進去看餐廳的詳細資訊：
   + 類別
   + 地址
   + 電話
   + 描述
   + 圖片
5. 使用者可以透過搜尋餐廳名稱來找到特定的餐廳
6. 使用者可以透過搜尋餐廳類別來找到特定的餐廳
7. 使用者可以新增一家餐廳
8. 使用者可以修改一家餐廳的資訊
9. 使用者可以刪除一家餐廳
10. 使用者可以設定餐廳排序

## 使用工具
- [Visual Studio Code](https://visualstudio.microsoft.com/zh-hant/) - 開發環境
- [Express](https://www.npmjs.com/package/express) - 應用程式架構
- [Express-Handlebars](https://www.npmjs.com/package/express-handlebars) - 模板引擎
- [MongoDB](https://www.mongodb.com/) - 資料庫
- [Mongoose](https://www.npmjs.com/package/mongoose) - MongoDB 的 ODM 可以在程式中與資料庫溝通
- [body-parser](https://www.npmjs.com/package/body-parser) - Express用於解析請求(body)資料的中介軟體
- [method-override](https://www.npmjs.com/package/method-override) - 增加除瀏覽器自帶的GET與POST以外的偽請求，增加介面語義化
- [express-session](https://www.npmjs.com/package/express-session) - 儲存認證結果
- [Passport](https://www.npmjs.com/package/passport) - 認證使用者
- [passport-local](https://www.npmjs.com/package/passport-local) - 使用username和password方式進行身分驗證
- [connect-flash](https://www.npmjs.com/package/connect-flash) - 製作系統訊息功能
- [bcrypt.js](https://www.npmjs.com/package/bcryptjs) - 進行雜湊加密
- [passport-facebook](https://www.npmjs.com/package/passport-facebook) - 使用Facebook提供auth
- [dotenv](https://www.npmjs.com/package/dotenv) - 將敏感資訊寫入環境變數

## 安裝
1. 開啟終端機(Terminal)，Clone 此專案至本機電腦

```
git clone https://github.com/aziz0916/restaurant_list_s3_a1.git
```
2. 進入存放此專案的資料夾

```
cd restaurant_list_s3_a1
```
3. 安裝 npm 套件

```
npm install
```
4. 引入種子資料

```
npm run seed
```
5. 執行程式

```
npm run dev
```
