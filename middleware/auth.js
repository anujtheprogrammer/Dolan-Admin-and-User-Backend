const user = require("../models/user");

module.exports = {
    loginHandler: (req,res) => {
        console.log(req.body);
        user.findAll({
            where: {
                Username:req.body.Username
            }
        }).then(u=> {
            console.log(u);
            if(u.length !== 0){
                u[0].Password.tostring == req.body.Password.tostring
                ? res.send(u)
                : res.send({ auth: false});
            }else{
                res.send({ message:"user not found !"});
            }
        });
    }
};