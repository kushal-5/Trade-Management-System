const SharesSchema= require("../../models/personalshares/sharesSchema")



const postPersonalShares= async(req,res)=>{
    const user= req.user
    try{
        const newShares= new SharesSchema({
            clientId:user._id,
            qty:req.body.qty,
            price:req.body.price,
            symbol:req.body.symbol

        });
        const saveShares=  await newShares.save();
        res.status(201).json(saveShares);

    }catch(error){
        res.status(400).json({error:error.message});
    }
}

const getPersonalShares= async(req,res)=>{
    const user= req.user
    try{
        const response = await SharesSchema.find({
            clientId:user._id,
        });
        console.log(response)
        res.status(200).json(response);
    }catch(error){
        res.status(500).json({error:error.message});
    }
}

module.exports= {postPersonalShares,getPersonalShares}