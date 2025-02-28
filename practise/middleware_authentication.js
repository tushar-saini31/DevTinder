const express =require("express");
const app=express();
app.use("/admin",(req, res, next)=>{
    console.log("admin auth is going to checked ");
    const token="xyzwm ";
    const isAdminAuthorised=token==="xyz";
    if(!isAdminAuthorised)
    {
        res.status(401).send.apply("unathorised request");
    }
    else{
        next();
    }
});
app.get("/user", (req, res)=>{
    res.send("user data sent");
});
app.get("/admin/getalladata", (req, res)=>{
    res.send("all data set");
});
app.listen(7777,()=>{
    console.log("server is execute correctly "); 
})