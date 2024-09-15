const express = require("express");
const jwt = require('jsonwebtoken');
const mongoose = require("mongoose");
const bcrypt = require('bcrypt');

const app = express();

const { UserModel, TodoModel } = require("./db");
const { auth, JWT_SECRET } = require("./auth");


mongoose.connect("mongodb+srv://mayankarya7:v71xw9cFMJD6HThm@cluster0.qx4z2kb.mongodb.net/ToDo-App-Database")

app.use(express.json());

app.post("/signup", async function(req, res) {
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    const hashedPwd = await bcrypt.hash(password , 5);
    console.log(hashedPwd);

    await UserModel.create({
        email: email,
        password: hashedPwd,
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
            id : response._id.toString()
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


app.post("/todo", auth, async function(req, res) {
    const userId = req.userId;
    const title = req.body.title;
    const done = req.body.done;

    await TodoModel.create({
        userId,
        title,
        done
    });

    res.json({
        message: "Todo created"
    })
});


app.get("/todos", auth, async function(req, res) {
    const userId = req.userId;

    const todos = await TodoModel.find({
        userId
    });

    res.json({
        todos
    })
});

app.listen(3000);