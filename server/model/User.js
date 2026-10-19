import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userName : {
        type : String , 
        required : [true , "Provide Username"] ,
        unique : [true , "Already Taken"] , 
        trim : true 
    }, 
    email : {
        type : String ,
        required : [true , "Please Provide Email"] ,
        trim : true ,
        unique : [true , "Already Exists"] 
    }, 
    password : {
        type : String ,
        required : [true , "Provide Password"] , 
        trim : true , 
    }
}, 
{
    timestamps : true
})

const User = mongoose.model("User" , userSchema) ; 
export default User ;