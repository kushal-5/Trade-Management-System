const mongoose = require('mongoose');

const TopBuySellSchema = new mongoose.Schema({
    company: { type: String, required: true },
    securityName: { type: String, required: true },
    details:{
        point:{ type: Number, required: true },
        change:{ type: Number, required: true },
        ltp:{ type: Number, required: true },
        avgprice:{ type: Number, required: true },
        open:{ type: Number, required: true },
        dhigh:{ type: Number, required: true },
        dlow:{ type: Number, required: true },
        close:{ type: Number, required: true },
        ltq:{ type: Number, required: true },
        volume:{ type: Number, required: true },
        yearlyhigh:{ type: Number, required: true },
        yearlylow:{ type: Number, required: true },
        ltt:{ type: Number, required: true },
    },
    buy:[{
        order: { type: Number, required: true },
        quantity: { type: Number, required: true },
        price:{type:Number, require:true},
    }],
    sell:[{
        order: { type: Number, required: true },
        quantity: { type: Number, required: true },
        price:{type:Number, require:true},
    }]
    
});

const TopBuySell = mongoose.model('TopBuySell', TopBuySellSchema);

module.exports = TopBuySell;
