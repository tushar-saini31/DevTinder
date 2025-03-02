const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");
const user = require("./models/user");
app.use(express.json());

app.post("/signup", async (req, res) => {
  //creating a new instance of user modal

  //console.log(req.body);
  const user = new User(req.body);

  try {
    await user.save();
    res.send("user added successfully !!");
  } catch (err) {
    res.status(400).send("Error saving the user" + err.message);
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
