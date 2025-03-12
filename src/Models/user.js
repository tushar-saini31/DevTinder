const mongoose=require("mongoose")
const validator=require("validator");
const bcrypt = require("bcrypt");
const jwt=require("jsonwebtoken");
const userSchema= new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        index:true,
        minLength:3,
        maxlenth:50
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
        type:String,
        enum:{
            values:["male", "female", "other"],
            message:'{value} is not valid gender type'
        },
    },
    about:{
        type:String,
        default:"this is dafault about the user"
    }
});
userSchema.methods.getJWT=async function(){
    const user =this;
    const token=await jwt.sign({_id:user._id},"DEV@TINDER$790",{
        expiresIn:"7d",
    });
    return token;
};
userSchema.methods.validatePassword=async function(passwordInputByUser)
{
    const user=this;
    const passwordHash=user.password;
    const ispasswordValid=await bcrypt.compare(
        passwordInputByUser,
        passwordHash
    )
    return ispasswordValid;
}

module.exports=mongoose.model("User", userSchema)
