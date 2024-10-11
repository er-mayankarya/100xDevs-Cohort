const express = require('express');

const app = express();

//Defining a Middleware to check the age 
function isOldEnoughMiddleware(req , res , next){
    const age = req.query.age;
    if (age >= 14) {
       next(); 
    }
    else{
        res.json({
            msg : "Sorry , Your age is not good enough for the rides."
        })
    }
}


//We may call middlewares for all the routes 
//Syntax : app.use(isOldEnoughMiddleware);
//Only routes below this app.use() may follow this middleware check point...!!

 
//We may call middlewares as a functional arguement 
app.get("/ride1" , isOldEnoughMiddleware , (req , res, next)=>{
    res.json({
        msg : "You have sucessfully completed ride 1"
    })
})

app.get("/ride12" , isOldEnoughMiddleware ,(req , res)=>{
    res.json({
        msg : "You have sucessfully completed ride 2"
    })
})

app.listen(3000);