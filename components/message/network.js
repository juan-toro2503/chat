const express=require('express');
const router = express.Router();
const response=require('../../network/response.js')
const controller=require('./controller')





//request=peticion response=respuesta a la peticion
router.get('/', function(req, res) {
         const filterMessages=req.query.user || null
        
        controller.getMessage(filterMessages)
        .then((messageList)=>{response.success(req,res,messageList,200)})
        .catch(()=>{response.error(req,res,' error en la peticion',500)})

})
router.post('/', function(req, res) {

        controller.addMessage(req.body.chat,req.body.user,req.body.message)
        .then((fullMessage)=>{response.success(req,res,fullMessage,201)})
        .catch(()=>{response.error(req,res,'error al guardar, datos incompletos',500)})
    

})
router.patch ('/:id', function(req, res) {
    console.log(req.params.id)
    controller.updateMessage(req.params.id,req.body.message)
    .then((data)=>{response.success(req,res,data,200)})
    .catch((err)=>{response.error(req,res,"error al actualizar",500)})
    
    //respuesta plana
    //res.send("se añadio el mensaje")
    //response.success(req,res," mensaje editado")

})
router.delete('/:id',function(req, res) {
    controller.deleteMessage(req.params.id)
    .then(()=>{response.success(req,res,`mensaje eliminado ${req.params.id}` ,200)})
    .catch((err)=>{response.error(req,res,err,500)})
    
    
   

})

module.exports=router;