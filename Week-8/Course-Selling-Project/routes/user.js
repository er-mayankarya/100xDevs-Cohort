const { Router } = require("express");
const { userModel } = require("../db");

const userRouter = Router();

// Users End-Points

userRouter.post("/signup" , async (req , res) => {
    const { email , password , name } = req.body; //ToDo : Add Zod validation
    //ToDo : Hash the pwd by bcrypt library

    //ToDo : Put this code inside a try catch block
    await userModel.create({
        email ,
        password,
        name
    });

    res.send({
        message : "You are signed Up"
    });

});

userRouter.post("/sinin" , (req ,res) => {

});

userRouter.get("/purchases" , (req ,res) => {

});

module.exports = {
    userRouter : userRouter
}