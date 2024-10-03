const express = require("express");
const jwt = require('jsonwebtoken');
const mongoose = require("mongoose");
const bcrypt = require("bcrypt"); //Used for hasing the password
const { z } = require("zod"); //Used for Input validation

const app = express();

const { UserModel, TodoModel } = require("./db");
const { auth , JWT_SECRET } = require("./auth");


mongoose.connect("mongodb+srv://mayankarya7:v71xw9cFMJD6HThm@cluster0.qx4z2kb.mongodb.net/ToDo-App-Database");

app.use(express.json());

app.post("/signup", async (req, res)=> {
     
    // Input Validation
    const requiredBody = z.object({
        email : z.string().email(),
        password : z.string(),
        name : z.string()
    });

    const passedDataWithSucess = requiredBody.safeParse(req.body);

    if (!passedDataWithSucess.success) {
        res.status(403).send({
            message : "Invalid Format" ,
            error : passedDataWithSucess.error
        });
    }

    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;
    
    const hasedPassword = await bcrypt.hash(password , 5);
    console.log(hasedPassword);

    await UserModel.create({
        email: email,
        password: hasedPassword,
        name: name
    });
    
    res.json({
        message: "You are signed up"
    });
    
    
});


app.post("/signin", async function(req, res) {
    const email = req.body.email;
    const password = req.body.password;

    const user = await UserModel.findOne({
        email: email,
    });

    if(!user){
        res.status(403).send({
            message : "User isn't exist in our DB."
        })
    }

    const passwordMatch = await bcrypt.compare(password , user.password);

    if (user && passwordMatch) {
        const token = jwt.sign({
            id: user._id.toString()
        }, JWT_SECRET);

        res.header("token" , token);

        res.json({
            token
        })
    } else {
        res.status(403).json({
            message: "Incorrect creds"
        })
    }
});

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
        message: "Todo Created"
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