# todo_sequelize
使用Express 和 mysql製作的todo list，可供使用者紀錄代辦事項

# 功能

 使用者必須註冊登入後才能使用本網頁功能  
 點擊Create 來建立一項新的代辦事項
 點擊Deatail 來確認代辦事項的詳細資訊
 點擊Edit 來編輯代辦事項
 點擊Delete 來刪除代辦事項
 點擊Logout 即可登出
 
# 測試帳號
    email: root.example.com
    password: 12345678
# 環境建置需求
  
* Node.js v10.15.0
* Nodemon v2.0.4
* Express v4.17.1
* Express-handlebars v5.1.0
* Bootstrap 
* Jquery v3.5.1
* body-parse v0.1.0
* method-overridev3.0.0
* bcryptjs v2.4.4
* connect-flash v0.1.1
* dotenv v8.2.0
* express-session v1.17.1
* passport v0.4.1
* passport-facebook v3.0.0
* passport0local v1.0.0
* mysql2: 2.2.5
* sequelize: 6.3.5
* sequelize-cli: 6.2.0

# 安裝與執行步驟

開啟終端機(Terminal)cd 到存放專案本機位置並執行:  

    $ git clone https://github.com/yongde2900/todo_sequelize.git
至專案資料夾使用npm安裝套件

    $ cd expende-tracker
    $ npm install
    
安裝mySQL 並使用 mySQL workbench新增新料庫 todo_sequelize  

    $ drop database if exists todo_sequelize; CREATE DATABASE todo_sequelize; USE todo_sequelize;
根據.enx.example 來設定.env檔案  

使資料庫同步 

    $ npx sequelize db:migrate
執行種子資料 

    $ npx sequelize db:seed:all
執行app.js 

    $ npm run start
成功開啟會出現以下訊息

    App is running on http://localhost:3000
    
進入http://localhost:3000即可使用本專案


    
