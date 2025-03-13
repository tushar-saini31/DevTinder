const express=require("express");
const profileRouter=express.Router();
const {UserAuth}=require("../middleware/auth");
const { validateEditProfileData } = require("../utils/validation");

profileRouter.get("/profile",UserAuth,  async(req, res)=>{
    try{
    const user=req.user;
    if(!user){
        throw new Error("user does not exist");
    }
    res.send(user);
}catch(err)
{
    res.status(400).send("error"+err.message);
}
});

profileRouter.patch("/profile/edit", UserAuth, async (req, res)=>{
    try{
        if(!validateEditProfileData(req)){
            throw new Error("Invalid edit request" );
        }
        const loggedInuser =req.user;
        //console.log(loggedInuser);
        Object.keys(res.body).forEach((key)=>(loggedInuser[key]=req.body[key]));
        await loggedInuser.save();

        res.send(`${loggedInuser.firstName},your profile is upadated`);

    }catch(err){
       res.status(400).send("error"+err.message);
    }
})


module.exports=profileRouter;