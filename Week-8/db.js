const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const userSchema = new Schema({
    email : {type : String , unique : true } ,
    password : String ,
    name : String
});

const adminSchema = new Schema({
    email : {type : String , unique : true } ,
    password : String ,
    name : String
});

const courseSchema = new Schema({
    tiltle : String ,
    description : String ,
    price : Number ,
    imageUrl : String ,
    creatorId : ObjectId
});

const purchaseSchema = new Schema({
    userId : ObjectId ,
    courseId : ObjectId
});

const userModel = mongoose.model("Users" , userSchema);
const adminModel = mongoose.model("Admins" , adminSchema);
const  courseModel = mongoose.model("Courses" , courseSchema );
const  purchaseModel = mongoose.model("Purchases" , purchaseSchema );

module.exports = {
    userModel ,
    adminModel,
    courseModel ,
    purchaseModel
}