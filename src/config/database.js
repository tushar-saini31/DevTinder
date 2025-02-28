const mongoose= require("mongoose");
const connectDB=async()=>{
    await mongoose.connect(
        "mongodb+srv://mynodejs:ebEmrpnTQRYOHnD4@mynodejs.huz4p.mongodb.net/DevTinder"
    );
};
module.exports = connectDB;

