const mongoose= require("mongoose");
const connectDB=async()=>{
    await mongoose.connect(
        "mongodb+srv://mynodejs:yY0bjAptQWGQlAXV@mynodejs.huz4p.mongodb.net/DevTinder"
    );
};
module.exports = connectDB;

