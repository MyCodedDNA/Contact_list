const contact=require("../schemas/schema");
module.exports=function(req,res)
{
    contact.create(req.body,function(err,contacts){
        if(err)
        {
            return console.error("error in action.js");
        }
    });
    res.redirect("back");
}