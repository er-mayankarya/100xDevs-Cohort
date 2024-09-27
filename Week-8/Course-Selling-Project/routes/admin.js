const { Router } = require('express');
const adminRouter = Router();

const jwt = require('jsonwebtoken');
const JWT_ADMIN_PASSWORD = "kdvbkjsdvbk";

const { adminModel } = require("../db");

//Admin End-Points

adminRouter.post("/signup" , async (req , res) => {
    const { email , password , name } = req.body; //ToDo : Add Zod validation
    //ToDo : Hash the pwd by bcrypt library

    //ToDo : Put this code inside a try catch block
    await adminModel.create({
        email ,
        password,
        name
    });

    res.send({
        message : "You are signed Up"
    });

});

adminRouter.post("/signin" , async (req , res) => {
    const { email , password } = req.body;

    //Todo : Ideally hashed the password & compare it from the user's pwd from DB
    const admin = await adminModel.findOne({
        email ,
        password
    });

    if(admin){
        const token = jwt.sign({
            id : user._id
        } , JWT_ADMIN_PASSWORD);

        //TODO : Do Cookies Logic

        res.header("token" , token);

        res.send({
            token
        });
    }else{
        res.status(403).send({
            message : "Invalid Credintials"
        })
    }

});

adminRouter.post("/course" , (req,res) => {

});

adminRouter.put("/course" , (req,res) => {

});

adminRouter.get("/course/bulk" , (req,res) => {

});

module.exports = {
    adminRouter : adminRouter
}