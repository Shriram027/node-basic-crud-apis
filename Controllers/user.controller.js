const userModel = require('../Models/user.model');


exports.login = (request, response) => {
    userModel.findOne({
        email: request.body.email,
        password: request.body.password
    }).then(result => {
        return response.status(200).json(result);
    }).catch(error => {
        return response.status(500).json(error);
    })
}


exports.register = (request,response)=>{
    userModel.create({
        name:request.body.name,
        email:request.body.email,
        password:request.body.password
    }).then(result=>{
        console.log(result);
        return response.status(201).json(result);
    }).catch(error=>{
        return response.status(500).json(error);
    })
}


exports.users = (request,response)=>{
    userModel.find().then(result=>{
        return response.status(200).json(result);
    }).catch(error=>{
        return response.status(500).json(error)
    })
}


exports.update = async(request,response)=>{
    userModel.updateOne({_id:request.body.cid},{
        $set:{
            name:request.body.name,
            email:request.body.email,
            password:request.body.password
        }
    }).then(result=>{
        if(result.modifiedCount == 1){
        return response.status(201).json({message:"Data has been updated"})
        }
        else
        return response.status(500).json({message:"Unable to update"})
    }).catch(error=>{
        return response.status(500).json(error);
    })
}


exports.delete = (request,response)=>{
    userModel.deleteOne({_id:request.body.cid}).then(result=>{
        if(result.acknowledged==true)
        return response.status(200).json({message:"Data has been deleted"});
        else
        return response.status(500).json({message:"Unable to delete "});
    }).catch(error=>{
        return response.status(500).json(error);
    })
}