const mongoose=require("mongoose")
const validator=require("validator");
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
        validate(value){
            if(!validator.isEmail(value))
            {
                throw new Error("Invalid email address"+value)
            }
        }
    }, 
    password:{
        type:String, 
        required:true,
        validate(value){
            if(!validator.isStrongPassword(value))
            {
                throw new Error("Invalid email address"+value)
            }
        }
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
