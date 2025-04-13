const mongoose= require("mongoose");
const connectDB=async()=>{
    await mongoose.connect(
        "mongodb+srv://mynodejs:Mhn0kTOHfS94nPj8@mynodejs.huz4p.mongodb.net/DevTinder"
    );
};
module.exports = connectDB;

