const mongoose = require("mongoose");

const SharesSchema= new mongoose.Schema(
    {
        clientId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
            require:true,
        },
      
        qty:{type:Number, require:true},
        price:{type:Number, require:true},
        symbol:{ type:String,require:true},

    }
)

const PersonalShares= mongoose.model("PersonalShares",SharesSchema);
module.exports= PersonalShares;