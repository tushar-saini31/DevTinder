const express=require("express");
const requestRouter=express.Router();
const {UserAuth}=require("../middleware/auth");
const ConnectionRequest=require ("../Models/connectRequest");
const user = require("../models/user");
requestRouter.post("/request/send/:status/:toUserId",UserAuth, async (req, res)=>{
    try{
        const fromUserId=req.user._id;
        const toUserId= req.params.toUserId;
        const status=req.params.status;
        
        const allowedStatus=["ignored", "interested"]
        if(!allowedStatus.includes(status))
        {
            return res.status(400).json({message:"invalid status type"+status});
        }

        const toUser=await user.findById(toUserId);
        if(!toUserId)
        {
            return res.status(404).json({message:"user not found"});
        }
        const existingConnectionRequest=await ConnectionRequest.findOne({
            $or:[
                { fromUserId, toUserId},
                { fromUserId:toUserId, toUserId:fromUserId}
            ],
        });

        if(existingConnectionRequest){
            return res
            .status(400)
            .send({message:"connection rrquest is alredy exsist"});
        }

        const connectionRequest=new ConnectionRequest({
            fromUserId,
            toUserId,
            status,
        });

        const data =await connectionRequest.save();

        res.json({
            message:"connection request is sent",
            data,
        });

    }catch(err){
         res.status(400).send("ERROR"+err.message);
        }
});

module.exports=requestRouter;
