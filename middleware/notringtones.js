const notringtone = require("../models/nrtst")
const NNRTR = require("../models/nnrtr")
const PNRTR = require("../models/pnrtr")
const  Op = require("sequelize").Op

module.exports = {
    createnoteringtone: (req,res)=>{
        console.log(req.body)
        notringtone.create({
            Name:req.body.name,
            Path:req.body.path,
            Downloads:req.body.downloads,
            createdBy:req.body.createdby,
            updatedBy:req.body.updatedBy,
            Status:req.body.status,
            Duration:req.body.Duration,
            AlbumArt:req.body.AlbumArt,
            About:req.body.About
        },
        {raw:true}
        ).then(j=>{
            console.log(j)
            NNRTR.create({
                CatId:req.params.catid,
                SID:j.id,
                createdBy:req.body.createdBy,
                updatedBy:req.body.updatedBy,
                status:req.body.Status
            },
            {raw:true}
            ).then( k=>{
                console.log(k)
                if(req.body.ispopular){
                pnrtr.create({
                    CatId:req.body.catid,
                    NNRTRID:k.id,
                    createdBy:req.body.createdBy,
                    updatedBy:req.body.updatedBy,
                    status:req.body.Status
                },
                {raw:true}
                ).then(l=>{
                    console.log(l)
                    res.send(l)
                })
            }else{
                res.send(k)
            }
            })
        })
    },
    getnotringtone: (req,res)=>{
        console.log(req.body)
        NNRTR.findAll({
            limit:15,
            where:{
                CatId:req.params.catid,
                id:{
                    [Op.gt]:req.params.id
                }
            },
            raw:true
        }).then(d=>{
            console.log(d)
            notringtone.findAll({
                where:{
                    id:d.map(a=>a.SID)
                }
            }).then(e=>{
                req.send(e)
            })
        })
    },
    getpopnotringtone: (req,res)=>{
        console.log(req.body)
        PNRTR.findAll({
            limit:15,
            where:{
                CatID:req.params.catid,
                id:{
                    [Op.gt]:req.params.id
                }
            }
            }).then(e=>{
            console.log(e)
            NNRTR.findAll({
                where:{
                    id:e.map(b=>b.NNRTRID)
                }
                }).then(f=>{
                console.log(f)
                notringtone.findAll({
                    where:{
                        id:f.map(a=>a.SID)
                    }
                    }).then(g=>{
                    console.log(g);
                    res.send(g)
                })
            })
        })
    }
}

