const express = require('express');
const mongoose = require("mongoose");

const { userRouter } = require('./routes/user');
const { courseRouter } = require("./routes/course");
const { adminRouter } = require("./routes/admin");

const app = express();
app.use(express.json());

app.use("/api/v1/user" , userRouter);
app.use('/api/v1/course' , courseRouter);
app.use('/api/v1/admin' , adminRouter);

async function main(){
    await mongoose.connect("mongodb+srv://mayankarya7:v71xw9cFMJD6HThm@cluster0.qx4z2kb.mongodb.net/Course-Selling-App"); 
    app.listen(3000);
    console.log("Listening on the port 3000");

}

main();
