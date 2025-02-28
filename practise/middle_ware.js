const express = require("express");
const app= express();
app.use("/user", (req, res, next)=>{
    console.log("hanling the route user");
    //res.send("rounter1");
    next();
},
(req, res)=>{
    console.log("hanling the router of second user");
    res.send("rounter2");
}
);
app.listen(7777, ()=>{
    console.log("server is successfully run in the server ");
});
