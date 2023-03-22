const express=require('express');
const response=require('../../network/response.js')
const router = express.Router();
const controller=require('./controller')



router.post('/',function(req,res){

    controller.addChat(req.body)
    .then(()=>{response.success(req,res,req.body,200)})
    .catch(()=>{response.error(req,res,'error al crear el chat',500)})
    console.log(req.body)
    


})
router.get('/',function(req,res){
    let filter= req.body._id || null
    
    controller.getChats(filter)
    .then(()=>{response.success(req,res,req.body,200)})
    .catch(()=>{response.error(req,res,'error al mostrar el chat',500)})
    


})

module.exports=router;