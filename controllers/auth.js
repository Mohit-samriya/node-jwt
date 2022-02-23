const User = require("../model/user");
const dotenv = require("dotenv");
const jwt=require('jsonwebtoken')
dotenv.config()

let userN

const index=(req,res,next)=>
{
 User.findOne({name:userN}).then(user=>
    {
        res.json({
            result,
            message:"you account is accessed Successfully"
        })
    }).catch(error=>
        {
            res.json({

                message: "an error occured"
            })
        })


}

const authenticate= (req,res,next)=>
{
try {
   const token =req.headers.authorization.split(' ')[1];
   const decode=jwt.verify(token,'AzQ,PI0(');
   
   userN=decode;
   res.json({

    decode
})
   next();

}
catch(error)
{
  
    res.json({

        error
    })
}
}

module.exports={
    authenticate,index
}


