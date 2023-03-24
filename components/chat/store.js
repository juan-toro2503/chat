const Model=require('./model')


function addChat(chat){

    
    const myChat=new Model(chat);
    console.log(myChat)
    return myChat.save()
    
}
function getChat(userId){
    return new Promise((resolve,reject) =>{
         let userFilter={}
        if(!userId==null){
            userFilter={
                users:userId}  

        } 
        
        let chat=Model.find(userFilter) 
        resolve(chat)
            

      
        
       
        
        
        

    })
}

module.exports={add:addChat,list:getChat}