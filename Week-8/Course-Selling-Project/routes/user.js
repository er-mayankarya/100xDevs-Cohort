const { Router } = require("express");

const userRouter = Router();

// Users End-Points

userRouter.post("/signup" , (req , res) => {

});

userRouter.post("/sinin" , (req ,res) => {

});

userRouter.get("/purchases" , (req ,res) => {

});

module.exports = {
    userRouter : userRouter
}