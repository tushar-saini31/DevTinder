const jwt=require("jsonwebtoken");
const User= require("../Models/user");
const UserAuth=async (req, res, next)=>
{
    try{
        const{token}=req.cookies;

        if(!token){
            return res.status(401).send(" please login !");
        }
         const decodeobj= await jwt.verify(token, process.env.JWT_SECRET_KEY);
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