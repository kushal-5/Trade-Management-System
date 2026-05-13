const mongoose= require ('mongoose')

const OrderSchema= new mongoose.Schema(
    {
      clientId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
      },

      status:{
        type:String,
        enum:["success","failed","active"],
        default:"active",
      },
          inst: { type: String, required: true },
          price: { type: Number, required: true },
          qty: { type: Number, required: true },
          symbol: { type: String, required: true },
          validity: { type: String, required: true },
          validtill: { type: String, required: true },
        type: { type: String,required:true, enum: ["buy", "sell", "default"], required: true },
        verification: { type: String, enum: ["pending", "verified", "rejected"], default: "pending" },
      },
      {timestamps:true}
) 

const OrderShares= mongoose.model('OrderShares', OrderSchema);
module.exports = OrderShares;