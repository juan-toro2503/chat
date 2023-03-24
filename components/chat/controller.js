const store=require('./store')

function addChat(users){
  
        if(!users || !Array.isArray(users)){
            return Promise.reject('lista invalida')
            
        }
        const chat={
            users:users,
        }
        return store.add(chat)
     

    
    

}
 async function getChats(userId){
    
    console.log(store.list(userId))
    let x=await store.list(userId).then()
    return  x
    
   
   
        
         

}
module.exports={addChat,getChats}