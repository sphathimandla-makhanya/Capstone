import {getUser, getUsers, postUser} from '../models/db.js'

export default{
    getAll: async(req,res)=>{
        res.send(await getUsers())
    },
    getSingle: async (req,res)=>{
        try{
            res.send(await getUser(+req.params.userID))
        }catch(error){
            console.log(error)
            res.status(500).json({error:'Internal server error'})
        }
    },
    addUser: async (req,res)=>{
        try{
            const {userID,firstName,lastName,gender,userRole,emailAdd,userPass,userProfile} = req.body
            const post =  await postUser(userID,firstName,lastName,gender,userRole,emailAdd,userPass,userProfile)
            res.send(await getUsers())
        }catch(error){
            console.log(error)
            res.status(500).json({error:'Internal server error'})
        }
    }
}