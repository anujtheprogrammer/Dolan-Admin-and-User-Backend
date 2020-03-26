const wallpaper = require("../models/wallpaper")
const nwr = require("../models/nwr")
const pwr = require("../models/pwr")
const Op = require("sequelize").Op


module.exports = {
    createwallpaper: (req,res) =>{
        console.log(req.body);
        wallpaper.create({
            Name: req.body.name,
            Path: req.body.Path,
            Author: req.body.Author,
            Downloads: req.body.download,
            createdBy: req.body.createdby,
            updatedBy: req.body.updatedby,
            Status: req.body.status
        },
         {raw : true}
        ).then( p=> {
            console.log(p.id);
            nwr.create({
                createdBy: req.body.createdBy,
                updatedBy: req.body.updatedby,
                Status: req.body.status,
                CatID: req.body.normcategory,
                SID: p.id
            },
            {raw : true}
            ).then( q=>{
                console.log(q);
                if(req.body.ispopular){
                pwr.create({
                    CatID: req.body.popcatid,
                    NWRID: q.id,
                    createdBy: req.body.createdby,
                    updatedBy: req.body.updatedby,
                    Status: req.body.status
                },
                {raw : true}
                ).then( r=>{
                    console.log(r);
                    res.send(r);
                });
            }else{
            res.send(q);
            }
            });
        });
    },
    getwallpaper: (req,res) => {
        console.log(req.params)
        nwr.findAll({
            limit:5,
            where: {
                CatID: req.params.cid,
                id:{
                    [Op.gt]:req.params.id
                }
            },
            raw:true
        })
        .then(u =>{
            console.log(u.map(a => a.id))
            wallpaper.findAll({
                where: {
                    id: u.map(a => a.id)
                },
                raw:true
            })
            .then(s=>{
            res.send(s)
        })
    })
    },
    getpopwallpaper: (req,res) => {
        pwr.findAll({
            where: {
                CatID: req.params.cid,
                id:{
                    [Op.gt]:req.params.id
                }
            },
            raw:true
        }).then(v =>{
            console.log(v.map(a => a.NWRID))
            nwr.findAll({
                where:{
                    id:v.map(a => a.NWRID)
                },
                raw:true
            }).then(w=>{
                console.log(w.map(b => b.SID))
                wallpaper.findAll({
                    
                    where:{
                    id:w.map(b => b.SID)
                },
                raw:true
            }).then(x=>{
                    console.log(x)
                    res.send(x)
                })
            })
        })
    }
};