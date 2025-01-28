const express= require("express");
const app = express();
app.use((req, res)=>{
    res.send("hello this the port 3000");
});

app.use("/hello",(req,res)=>{
    res.send("this router hello see the result |");
})
app.use("/other", (req, res)=>{
    res.send("this other router ")
})
app.listen(3000,()=>{
    console.log("hello from the sever ");
});
