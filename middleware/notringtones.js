const notringtone = require("../models/nrtst")

module.exports = {
    createnoteringtone: (req,res)=>{
        console.log(req.body)
        notringtone.create({
            Name:req.body.name,
            Path:req.body.path,
            Author:req.body.Author,
            Downloads:req.body.downloads,
            createdBy:req.body.createdby,
            updatedby:req.body.updatedby,
            Status:req.body.status
        },
        {raw:true}
        ).then(j=>{
            console.log(j)
            res.send(j)
        })
    },
    getnotringtone: (req,res)=>{
        console.log(req.body)
        notringtone.findAll({
            where:{
                id:req.params.id
            },
            raw:true
        }).then(d=>{
            res.send(d)
        })
    }
}