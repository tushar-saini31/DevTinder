
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
