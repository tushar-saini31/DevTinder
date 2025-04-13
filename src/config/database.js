const mongoose= require("mongoose");
const connectDB=async()=>{

    await mongoose.connect(
       // process.env.DB_CONNECTION_SECRET_KEY
       "mongodb+srv://mynodejs:n2eXICbvkC5Iet2e@mynodejs.huz4p.mongodb.net/DevTinder"
    );
};
module.exports = connectDB;

