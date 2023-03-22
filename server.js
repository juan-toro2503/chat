const express=require('express');
const bodyParser=require('body-parser');
const db=require('./db')
db('mongodb+srv://jftoro940:81fmJ4k8gnKfpme0@cluster0.qxhqzkz.mongodb.net/test')


const router=require('./network/routes')



var app= express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
router(app)


//app.use('/app',express.static('public'))
app.listen(3000)
console.log("la app esta escuchando en http://localhost:3000/get")