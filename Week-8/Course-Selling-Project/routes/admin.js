const { Router } = require('express');
const adminRouter = Router();

const jwt = require('jsonwebtoken');
const { JWT_ADMIN_PASSWORD } = require("../config");

const { adminModel, courseModel } = require("../db");
const { adminMiddlewares } = require('../middlewares/adminMiddleware');

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

adminRouter.post("/course" , adminMiddlewares , async (req,res) => {

    const adminId = req.adminId;

    const { title , description , imageUrl , price } = req.body;

    const course = await courseModel.create({
        title : title ,
        description :  description,
        price : price ,
        imageUrl :imageUrl ,
        creatorId : adminId
    });

    res.json({
        message : "Course Created" ,
        courseId : course._id
    });

});

adminRouter.put("/course" , adminMiddlewares , async (req,res) => {
    const adminId = req.adminId;

    const { title , description , imageUrl , price , courseId } = req.body;

    const course = await courseModel.updateOne({
        _id : courseId ,
        creatorId : adminId
    },{
        title : title ,
        description :  description,
        price : price ,
        imageUrl :imageUrl
    });

    res.json({
        message : "Course Updated" ,
        courseId : course._id
    });
});

adminRouter.get("/course/bulk" ,adminMiddlewares , async (req,res) => {
    const adminId = req.adminId;

    const courses = await courseModel.find({
        creatorId : adminId
    });

    res.send({
        courses
    })
});

module.exports = {
    adminRouter : adminRouter
}