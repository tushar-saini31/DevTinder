const express=require("express");
const authRouter=express.Router();
const {validateSignUpData}=require("../utils/validation");
const bcrypt=require("bcrypt");
const User = require("../models/user");

 
authRouter.post("/signup", async (req, res) => {
    
    try {
      validateSignUpData(req);
  
      const{firstName, lastName, email, password}=req.body;
  
      //encrpyt the password 
     const passwordHash=await bcrypt.hash(password, 10);
     console.log(passwordHash);
  
      const user = new User({
          firstName, 
          lastName, 
          email, 
          password:passwordHash
      });
      await user.save();
      res.send("user added successfully !!");
    } catch (err) {
      res.status(400).send("Error " + err.message);
    }
  });


  authRouter.post("/login", async(req, res)=>{
    try{
        const{email, password} =req.body
        const user = await User.findOne({email:email});
        if(!user)
        {
        throw new error("invalid credentials");
        }
        const ispasswordValid=await user.validatePassword(password);


        if(ispasswordValid)
        {
        // cfreate JWT token
         const token= await user.getJWT();

           res.cookie("token",token);
           res.send("login is successful");
        }else{
            throw new Error("invlid credentials");
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



// app.get("/user", UserAuth, async (req, res)=>{
//     const userEmail=req.body.email;

//     try{
//         const users= await User.find({email:userEmail});
//             res.send(users);

//      }catch(err)
//     {
//         res.status(400).send("something went wrong");
//     }
// });



module.exports=authRouter;
