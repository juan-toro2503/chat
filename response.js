exports.success=function(req,res,message){
    res.send({error:'',
body:message})
}

exports.error=function(req,res,message,status){
    res.send({error:message,codigo:status,})
}