const express = require("express");
const connectDB = require("./config/database");
const app = express();
const cookieParser = require("cookie-parser");

app.use(express.json());
app.use(cookieParser()); 

const authRouter=require("./routes/auth");
const profileRouter=require("./routes/profile");
const requestRouter=require("./routes/request");

app.use("/",authRouter);
app.use("/",profileRouter);
app.use("/", requestRouter);


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





  // Update User Route (PATCH)
// app.patch("/user", async (req, res) => {
//     const userId = req.body.userId;
//     const data = req.body;
  
//     try {
//       const user = await User.findByIdAndUpdate(userId, data, { new: true });
//       if (!user) {
//         return res.status(404).send("User not found");
//       }
//       console.log(user);
//       res.send("User updated successfully");
//     } catch (err) {
//       res.status(400).send("Something went wrong: " + err.message);
//     }
//   });
