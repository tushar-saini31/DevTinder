const express=require("express");
const requestRouter=express.Router();
const {UserAuth}=require("../middleware/auth");

requestRouter.post("/sendConnectionRequest",UserAuth, async (req, res)=>{
    const user=req.user;
    console.log("sendingg connection request ");
    res.send(user.firstName+"sent connection request ");
});

module.exports=requestRouter;
