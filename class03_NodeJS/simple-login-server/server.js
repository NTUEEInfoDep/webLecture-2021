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
        id: "b08901000",
        password: "0000",
    },
    {
        id: "b08901222",
        password: "2222",
    },
    {
        id: "b08901444",
        password: "3333",
    },
];

/*
App Configuration
*/
app.use(express.urlencoded({ extended: false }));

/*
Routes Definitions
*/
// Route to Homepage
app.get("/", response_get);

function response_get(req, res) {
    res.sendFile(path.join(__dirname + "/static/index.html"));
}

// Route to Login Page
app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname + "/static/login.html"));
});

app.post("/login", (req, res) => {
    // Insert Login Code Here
    let username = req.body.username;
    let password = req.body.password;
    const user = users.filter((u) => u.id == username);
    if (user.length > 0) {
        if (user[0].password == password) {
            res.send(`Welcome! ${username}`);
        } else {
            res.send(`Login Failed. Please try again!`);
        }
    } else {
        res.send("No user found!");
    }
});

/*
Server Activation
*/
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
}); //告訴server聽取特定port
