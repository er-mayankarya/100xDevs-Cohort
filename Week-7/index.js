const express = require("express");
const jwt = require('jsonwebtoken');
const mongoose = require("mongoose");

const app = express();

const { UserModel, TodoModel } = require("./db");
const { auth, JWT_SECRET } = require("./auth");


mongoose.connect("mongodb+srv://mayankarya7:v71xw9cFMJD6HThm@cluster0.qx4z2kb.mongodb.net/Todo-App-Database")

app.use(express.json());

app.post("/signup", async function(req, res) {
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    await UserModel.create({
        email: email,
        password: password,
        name: name
    });
    
    res.json({
        message: "You are signed up"
    })
});


app.post("/signin", async function(req, res) {
    const email = req.body.email;
    const password = req.body.password;

    const response = await UserModel.findOne({
        email: email,
        password: password,
    });

    if (response) {
        const token = jwt.sign({
            id: response._id.toString()
        }, JWT_SECRET);

        res.json({
            token
        })
    } else {
        res.status(403).json({
            message: "Incorrect creds"
        })
    }
})


app.post("/todo", function(req, res) {

});


app.get("/todos", function(req, res) {

});

app.listen(3000);