/*
Required External Modules
*/
const express = require("express");
const path = require("path");

/*
App Variables
*/
const app = express(); //建立一個Express伺服器
const port = 3000;

/*
App Configuration
*/
app.use(express.urlencoded({ extended: false }));

/*
Routes Definitions
*/

/*
Server Activation
*/
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
}); //告訴server聽取特定port
