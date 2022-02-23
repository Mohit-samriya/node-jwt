const User = require("../model/user");
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const dotenv = require("dotenv");
dotenv.config()

exports.getPosts = (req,res) => {
    const user = User.find()
    .select("_id name password")
    .then(user  => {
        res.json({user: user})
    })

    .catch(err => console.log(err));
};

exports.createUser = async(req, res) => {
    let salt = await bcrypt.genSalt(10)
    let hashedPassword =await bcrypt.hash(req.body.password,salt)
    let user = new User ({ name: req.body.name, password: hashedPassword})
    user.save().then(user => {
        res.json({
            message: "add",
        });
    }).catch(error => {
        res.json({
            message: "error"
        })
    })
    console.log("Creating Post ", req.body);
};

exports.loginUser = async(req, res) => {
    var username=req.body.name
    var password=req.body.password
    User.findOne({name:username}).then(user=>
        {
            if(user)
            {
           bcrypt.compare(password,user.password,(err,result)=>
           {
               if(err)
               {
                   res.json({
                      error:err
                   })
               }if(result)
               {
                    let accessToken = jwt.sign({name:user.name}, 'AzQ,PI0(')
                   res.json({
                       message :"Login Successfully",
                       accessToken
                   })
               }else
               {
                   res.json({
                       message:"password does not match "
                   })
               }    
           })
            }
            else
            {
                res.json( {
                    message:"username not found"
                })
            }
        })
}



