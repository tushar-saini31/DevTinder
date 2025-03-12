const jwt=require("jsonwebtoken");
const User= require("../models/user");
const UserAuth=async (req, res, next)=>
{
    try{
        const{token}=req.cookies;

        if(!token){
        throw new Error("token is not valid !!!")
        }
         const decodeobj= await jwt.verify(token,"DEV@TINDER$790");
            const {_id}=decodeobj;
       
            const user=await User.findById(_id);

            if(!user){
                throw new Error("user does not found");
            }
            req.user=user;
            next();
        }
        catch(err)
        {
            res.status(400).send("error"+err.message);
        }
}
module.exports={
    UserAuth,
};