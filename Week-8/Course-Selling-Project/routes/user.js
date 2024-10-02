const { Router } = require("express");
const { userModel, purchaseModel, courseModel } = require("../db");

const jwt = require('jsonwebtoken');
const { JWT_USER_PASSWORD } = require("../config");
const { userMiddleware } = require("../middlewares/userMiddleware");

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

userRouter.post("/sinin" , async (req ,res) => {
    const { email , password } = req.body;

    //Todo : Ideally hashed the password & compare it from the user's pwd from DB
    const user = await userModel.findOne({
        email ,
        password
    });

    if(user){
        const token = jwt.sign({
            id : user._id
        } , JWT_USER_PASSWORD);

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

userRouter.get("/purchases" , userMiddleware , async (req ,res) => {
    const userId = req.userId;

    const purchases = await purchaseModel.find({
        userId
    });

    const courseData = await courseModel.find({
        _id : { $in: purchases.map(x => x.courseId) }
    })

    req.send({
        purchases,
        courseData
    })

});

module.exports = {
    userRouter : userRouter
}