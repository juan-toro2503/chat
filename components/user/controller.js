const store=require('./store')

 function addUser(name){
    if(!name){
        return Promise.reject('ingresa un usuario')
    }

    const user={
        name,
    }
    return store.add(user)

 }
 function getUser(user){
    return new Promise((resolve,reject)=>{
        resolve(store.list(user))

    })

 }
module.exports={
    addUser,
    getUser
}