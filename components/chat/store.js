const Model=require('./model')


function addChat(users){
    const chat=new Model();
    chat.save(users)
    console.log(users)
}
function getChat(userId){
    return new Promise((resolve,reject) =>{
        /* let userFilter={}
        if(userId==null){
            userFilter={users:userId}  

        } */
        
        let chat=Model.find()
        .populate('user')
        .exec()
        resolve(chat)
        console.log(chat)
        
        

    })
}

module.exports={add:addChat,list:getChat}