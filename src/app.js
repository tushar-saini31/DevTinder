    const express=require("express");
    const connectDB=require("./config/database");
    const app=express();
    const User=require("./models/user");

    app.post("/signup", async (req, res)=>{
        //creating a new instance 
        const user=new User({
            firstName:"Virat",
            lastName:"kholi",
            email:"kholi@gmail.com",
            passwaord:"223666",
            age:'35',
            gender:'mail'
        });
        await user.save();
        res.send("user added successfully !!");
    });

    connectDB().then(()=>{
        console.log("database is istablished...");
        app.listen(7777,()=>{
            console.log("server is successfully listening on port 7777 ");
        });
    })
    .catch((err)=>{
        console.error("database is not established...");
    });





// const express=require("express");
// const connectDB=require("./config/database");
// const User=require("./models/user");
// const app=express();

// app.use(express.json());

// app.post("/signup", async (req, res)=>{
//     const newUser = new User({
//         firstName:"Tushar",
//         lastName:"Saini",
//         email:"ts4275131@gmail.com",
//         password:"223456",
//         age:23,
//         gender:"male"
//     });
//     await newUser.save();
//     res.send("user added successfully !!");
// });

// connectDB().then(()=>{
//     console.log("database is established...");
//     app.listen(7777,()=>{
//         console.log("server is successfully listening on port 7777");
//     });
// })
// .catch((err)=>{
//     console.error("database is not established...", err);
// });


