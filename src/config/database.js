const mongoose= require("mongoose");
const connectDB=async()=>{
    await mongoose.connect(
        "mongodb+srv://myuser:qWerjrS6BQeTaCFC@mynodejs.huz4p.mongodb.net/DevTinder"
    );
};
module.exports = connectDB;

