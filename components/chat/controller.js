const store=require('./store')

function addChat(users){
    return new Promise((resolve,reject)=>{
        if(!users){
            reject('error al crear el chat')
            return false
        }
        const chat={
            users:users,
        }
        resolve(store.add(chat))
        console.log(users)

    })
    

}
 function getChats(userId){
    return new Promise((resolve, reject) =>{
        resolve(store.list(userId))
    })
   
        
         

}
module.exports={addChat,getChats}