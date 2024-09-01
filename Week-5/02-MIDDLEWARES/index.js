//Middlewares 

const express = require("express");

const app = express();

function loggerMiddleware(req , res , next){
    console.log("Method : "+ req.method)
    console.log("URL : " + req.url)
    console.log(new Date());
    next();
}
app.use(loggerMiddleware);

app.get('/s' , (req , res) =>{
    res.json({
        msg : "logged"
    })
})

app.listen(3000);