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
const users = [
    {
        id: 1,
        name: "Joe",
        age: 18,
    },
    {
        id: 2,
        name: "John",
        age: 22,
    },
];

/*
App Configuration
*/

/*
Routes Definitions
*/
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/static/index.html"));
});

app.get("/test", (req, res) => {
    res.send("<h1>Test</h1>");
});

app.get("/users/:id", function (req, res) {
    const user = users.filter((u) => u.id == req.params.id);
    if (user.length > 0) {
        res.send(`<h1>Hi! ${user[0].name}</h1>`);
    } else {
        res.send(`<h1>User Not Found</h1>`);
    }
});

/*
Server Activation
*/
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
}); //告訴server聽取特定port
