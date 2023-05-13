
/*
function authenticate(req, res, next){
    if(!req.headers.Authentication){
        res.send("User is not authenticated")
    }else{
        next()
    }
}

function JoiUserValidation(req, res, next){
    if(Joi.isValid(req.body)){
        next() 
    }else{
        res.send(Joi.error)
    }
}


function isCached(){

}

function createUser(req, res){

    const user = User.create(req.body)

    res.status(201).json(user)
}

Router.post("/user", [authenticate, JoiUserValidation, isCached], createUser)

*/