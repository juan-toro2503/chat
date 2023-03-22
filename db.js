const db=require('mongoose')


//mongodb+srv://jftoro940:juanfrancisco2503@cluster0.qxhqzkz.mongodb.net/test
db.Promise=global.Promise

async function connect(url){
    await db.connect(url,{
    useNewUrlParser: true,
    })
    console.log("db conectada con éxito")

}
module.exports=connect;