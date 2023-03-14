const express=require('express');
const bodyParser=require('body-parser');
//importamos el modulo para enviar nuestro response
const response=require('./response.js')
var app=express();
const router = express.Router();

//siempre se debe parsear primero y luego se debe el router para que nuestro req no aparezca undefined
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router)



//el router lo utilizamos para definir nuestras rutas de acceso

//request=peticion response=respuesta a la peticion
router.get('/get', function(req, res) {
    //llamamos al modulo response y utilizamos las funciones
    
       if(req.query.error === "ok"){
        response.error(req,res,"hubo un error",400)

       }else{
        response.success(req,res,"lista de mensaje",200)
    } 


})
router.post('/post', function(req, res) {
    //enviar respuestas vacias u objetos
    //res.status(201).send({error:'',body:'creado correctamente'})

    //no se pueden enviar los header despues de haber enviado el response
    res.header({
        "custom-header":"valor personalizado"}
    )
    response.success(req,res," mensaje creado")
    //aqui podemos enviar info por el header
    console.log(req.headers)
    console.log(req.query)
    
   

})
router.put ('/put', function(req, res) {
    
    //respuesta plana
    //res.send("se añadio el mensaje")
    response.success(req,res," mensaje editado")

})
router.delete('/delete',function(req, res) {
    response.success(req,res," mensaje eliminado")
   

})


app.listen(3000)
console.log("la app esta escuchando en http://localhost:3000/get")