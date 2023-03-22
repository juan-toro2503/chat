const Model = require('./model')

 async function getUser(user){
    /* const userFilter={}
    console.log(user)
    if(user!==null){
        userFilter={name:user}
    } */
    const list= await Model.find()
    return list
}

 function addUser(user){
    const myUser=new Model(user)
    return myUser.save()
}



module.exports={
    add:addUser,
    list:getUser

}