const express=require("express");
const authRouter=express.Router();
const {validateSignUpData}=require("../utils/validation");
const bcrypt=require("bcrypt");
const User = require("../Models/user");

 
authRouter.post("/signup", async (req, res) => {
    
    try {
      validateSignUpData(req);
  
      const{firstName, lastName, email, password, photoUrl, gender, age, about}=req.body;
  
      //encrpyt the password 
     const passwordHash=await bcrypt.hash(password, 10);
     console.log(passwordHash);
  
      const user = new User({
          firstName, 
          lastName, 
          email, 
          password:passwordHash,
      });
      const savedUser=await user.save();
      const token=await savedUser.getJWT();
      res.cookie("token",token,{
        expires:new Date(Date.now()+8*3600000),
      })
          
      res.json({message: "user added successfully",data:savedUser});
    } catch (err) {
      res.status(400).send("Error " + err.message);
    }
  });


  authRouter.post("/login", async(req, res)=>{
    try{
        const{email, password} =req.body
        if (!email || !password) {
          throw new Error("Email and password are required");
        }
        const user = await User.findOne({email:email});
        if(!user)
        {
        throw new Error("invalid credentials");
        }
        const ispasswordValid=await user.validatePassword(password);


        if(ispasswordValid)
        {
        // cfreate JWT token
         const token= await user.getJWT();

           res.cookie("token",token);
           res.send(user);
        }else{
            throw new Error("invalid credentials");
        } 
    }catch(err){
        res.status(400).send("ERROR :"+err.message);
    }
});

authRouter.post("/logout", (req, res)=>{
    res.cookie("token", null, {
        expires: new Date(Date.now()),
    });
    res.send("logout is successfull");
});




module.exports=authRouter;
