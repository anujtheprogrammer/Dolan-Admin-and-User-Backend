const ringtone = require("../models/ringtone")
const nrtr = require("../models/nrtr")
const prtr = require("../models/prtr")
const Op = require("sequelize").Op

module.exports = { 
    createringtone: (req,res) =>{
        console.log(req.body)
        ringtone.create({
            Name:req.body.Name,
            Path:req.body.Path,
            Downloads:req.body.Downloads,
            createdBy:req.body.createdBy,
            updatedBy:req.body.updatedby,
            status:req.body.status,
            Duration:req.body.Duration,
            AlbumArt:req.body.albumArt,
            About:req.body.About
        },
        {raw:true}
        ).then( m=> {
            console.log(m)
           nrtr.create({
               CatID:req.body.normcategory,
               SID:m.id,
               createdBy:req.body.createdBy,
               updatedBy:req.body.updatedBy,
               status:req.body.status
            },
            {raw:true}
            ).then( n => {
                console.log(n)
                if(req.body.ispopular){
                prtr.create({
                 CatID:req.body.popcatid,
                 NRTRID:n.id,
                 createdBy:req.body.createdby,
                 updatedBy:req.body.updatedby,
                 Status:req.body.status
                },
                {raw:true}
                ).then(k=>{
                    console.log(k)
                    res.send(k)
                })
            }else{
                res.send(n)
            }
            })
        });
    },
    getringtones:(req,res) =>{
        console.log(req.body)
        nrtr.findAll({
            limit:15,
            where:{
                CatID:req.params.cid,
                id:{
                    [Op.gt]:req.params.id
                }
            },
            raw:true
        }).then(y=>{
            console.log(y)
            ringtone.findAll({
                limit : 15,
                where:{
                    id:y.map(a=>a.SID)
                },
                raw:true
            }).then(z=>{
                res.send(z)
            })
        })
    },
    getpopringtones:(req,res)=>{
        console.log(req.body)
        prtr.findAll({
            where:{
                CatID:req.params.cid,
                id:{
                    [Op.gt]:req.params.id
                }
            },
            raw:true
        }).then(a=>{
            console.log(a)
            nrtr.findAll({
                where:{
                    id:a.map(b=>b.NRTRID)
                },
                raw:true
            }).then(b=>{
                console.log(b)
                ringtone.findAll({
                    limit:15,
                    where:{
                        id:b.map(c=>c.SID)
                    },
                    raw:true
                }).then(c=>{
                    res.send(c)
                })
            })
        })
    }
}