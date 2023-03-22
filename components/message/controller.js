const store=require('./store')
function getMessage(filterMessages){
    return new Promise((resolve,reject)=>{
        resolve(store.list(filterMessages))

    })
}
function addMessage(user,message){
    return new Promise((resolve ,reject)=>{
        if(!user || !message){
            console.error('no hay usuario o mensaje')
            reject('datos incompletos')
            return false
        }

    
    const fullMessage={
        user:user,
        message:message,
        date:new Date()
    }
   
    resolve(fullMessage)
    store.add(fullMessage)
    
    
    
   })

}
 function updateMessage(id, message) {
    return new Promise(async(resolve,reject)=>{
        if(!id || !message){
            reject("datos incompletos")
            return false
        }
        const result =await store.updateText(id,message)
        resolve(result)

    })


}
function deleteMessage(id){
    return new Promise((resolve, reject) =>{
        if(!id){
            reject("se requiere un id para eliminar")
            return false
        }
        resolve(store.delete(id))

    })
}


module.exports={
    getMessage,
    addMessage,
    updateMessage,
    deleteMessage
}