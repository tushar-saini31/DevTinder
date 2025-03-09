const mongoose= require("mongoose");
const { applyTimestamps } = require("../models/user");
const ConnectRequestSchema= new mongoose.schema({
    fromId:{
        type: mongoose.Schema.Types.ObjectId
    },
    toUserId:{
        type: mongoose.Schema.Types.ObjectId
    },
    status:{
        type: String,
        enum:{
            value:["ignore", "interested", "accepted","rejected"],
            message:'{VALUE} is incorrect status type'
        }
    }
},
    {
        timestamps:true,
    }
);