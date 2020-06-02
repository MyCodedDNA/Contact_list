const mongoose=require("mongoose");
const schema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    }
});

const contact=mongoose.model("contact_list_model",schema);

module.exports=contact;