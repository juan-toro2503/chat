const express=require('express');
const response=require('../../network/response.js')
const router = express.Router();
const controller=require('./controller')


router.get('/', function(req, res){
    const filterUser=req.query.name || null
    
    controller.getUser(filterUser)
    .then((data)=>{response.success(req,res,data,200)})
    .catch(()=>{response.error(response.error(req,res,'error ',500))})
})
router.post('/', function(req, res){
    controller.addUser(req.body.name)
    .then((data)=>{response.success(req,res,`usuario ${req.body.name} fue creado`,201)})
    .catch(()=>{response.error(response.error(req,res,'error al guardar, datos incompletos',500))})
})
module.exports=router