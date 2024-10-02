const { Router } = require("express");
const { userMiddleware } = require("../middlewares/userMiddleware");
const { purchaseModel } = require("../db");

const courseRouter = Router();

//Course End-Points 

courseRouter.post('/purchase' , userMiddleware , async (req ,res) => {
    const userId = req.userId;
    const courseId = req.body.courseId;

    await purchaseModel.create({
        userId ,
        courseId
    });

    res.send({
        message : "You have sucessfully bought the course"
    });
});

courseRouter.get("'/preview" , async (req , res) => {
    
    const courses = await purchaseModel.find({});

    res.send({
        courses
    });
});

module.exports = {
    courseRouter : courseRouter    
}