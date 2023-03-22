exports.success=function(req,res,message){
    res.send({error:'todo salio bien',
    body:message})
}

exports.error=function(req,res,message,status){
    res.send({error:message,codigo:status,})
}