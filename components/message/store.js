const Model=require('./model')


function addMessages(message){
    
    //list.push(message)
    const myMessage= new Model(message)
    myMessage.save()
   

}

function getMessages(filterUser){
     return new Promise((resolve, reject) =>{
        let filter={}
        if(filterUser!==null){
        
           filter={ user:filterUser}
        

        }
         let message =Model.find(filter)
        .populate('user')
        .exec()
        resolve(message)
        
     })

    
    
    
}
async function updateText(id,message){
    const foundMessage=await Model.findOne({
        _id:id
    })
     foundMessage.message=message
     const newMessage=await foundMessage.save()
     return newMessage
}
async function deleteMessage(id){
    return await Model.deleteOne({_id:id})


}
module.exports={
    add:addMessages,
    list:getMessages,
    updateText,
    delete:deleteMessage
}