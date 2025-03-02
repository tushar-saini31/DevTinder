const mongoose=require("mongoose")
const userSchema= new mongoose.Schema({
    firstName:{
        type:String
    }, 
    lastName:{
        type: String
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
    }, 
    password:{
        type:String, 
        required:true,
    }, 
    age:{
        type:Number
    }, 
    gender:{
        type:String
    },
    about:{
        type:String,
        default:"this is dafault about the user"
    }
});

module.exports=mongoose.model("User", userSchema)
