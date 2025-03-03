const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");
const {validateSignUpData}=require("./utils/validation")
const bcrypt=require("bcrypt");
app.use(express.json());

app.post("/signup", async (req, res) => {
    
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

app.get("/user", async (req, res)=>{
    const userEmail=req.body.email;

    try{
        const users= await User.find({email:userEmail});
        // if(users.length===0)
        // {
        //     res.status(404).send("user not found");
        // }else{
            res.send(users);
    //     }
     }catch(err)
    {
        res.status(400).send("something went wrong");
    }
});

app.get("/feed", (req, res)=>{

});

// Update User Route (PATCH)
app.patch("/user", async (req, res) => {
    const userId = req.body.userId;
    const data = req.body;
  
    try {
      const user = await User.findByIdAndUpdate(userId, data, { new: true });
      if (!user) {
        return res.status(404).send("User not found");
      }
      console.log(user);
      res.send("User updated successfully");
    } catch (err) {
      res.status(400).send("Something went wrong: " + err.message);
    }
  });

connectDB()
  .then(() => {
    console.log("database is istablished...");
    app.listen(7777, () => {
      console.log("server is successfully listening on port 7777 ");
    });
  })
  .catch((err) => {
    console.error("database is not established...");
  });
