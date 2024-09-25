const { Router } = require('express');

const adminRouter = Router();

const { adminModel } = require("../db");

//Admin End-Points

adminRouter.post("/signup" , (req , res) => {

});

adminRouter.post("/signin" , (req , res) => {

});

adminRouter.post("/course-create" , (req,res) => {

});

adminRouter.put("/course-update" , (req,res) => {

});

adminRouter.get("/courses-preview" , (req,res) => {

});

module.exports = {
    adminRouter : adminRouter
}