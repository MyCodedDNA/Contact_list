const contacts=require("../schemas/schema");
module.exports=function(req,res)
{
    let id=req.query.id;
    contacts.findByIdAndDelete(id,function(err)
    {
        if(err)
        {
            console.log("error in delete");
        }
    });
    res.redirect("back");
}