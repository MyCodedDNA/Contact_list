const contact=require("../schemas/schema");
module.exports.home=function(req,res){
    contact.find({},function(err,contacts){
        if(err)
        {
            return console.error(err);
           
        }
        res.render('contacts',{contact_list:contacts});
        
    })
   
}