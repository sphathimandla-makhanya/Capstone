import bcrypt from 'bcrypt'
import {getUser, getUsers, postUser, editUser, deleteUser} from '../models/db.js'

export default{
    getAll: async(req,res)=>{
        res.send(await getUsers())
    },
    getSingle: async (req,res)=>{
        try{
            res.send(await getUser(+req.params.userID))
        }catch(error){
            console.error(error)
            res.status(500).json({error:'Internal server error'})
        }
    },
    addUser: async (req,res)=>{
        try{
            const {firstName,lastName,gender,userRole,emailAdd,userPass,userProfile} = req.body

            // const registeredUser = await getUser(emailAdd)
            // if(registeredUser){
            //     // console.log("already registered");
            //     res.status(400).json({err:'This email is already registered.'})
            // }else{
                bcrypt.hash(userPass,10,async(error,hash)=>{
                    if(error)throw error
                    await postUser(firstName,lastName,gender,userRole,emailAdd,hash,userProfile)
                    res.send({
                        reply:  `Hello ${firstName}`
                    })
                })
            // }

        }catch(error){
            console.log(error)
            res.status(400).json({error:'Something went wrong'})
        }
    },
    updateUser: async (req, res) => {
        try {
            const [user] = await getUser(+req.params.userID);
            let { firstName, lastName, gender, userRole, emailAdd, userPass, userProfile } = req.body;
    
            // Conditionally update properties only if they are provided in the request body
            firstName ? firstName = firstName : { firstName } = user;
            lastName ? lastName = lastName : { lastName } = user;
            gender ? gender = gender : { gender } = user;
            userRole ? userRole = userRole : { userRole } = user;
            emailAdd ? emailAdd = emailAdd : { emailAdd } = user;
    
            let hash; // Variable to hold the hashed password
    
            // Check if userPass is provided and update it
            if (userPass) {
                // Hash the new password
                hash = await new Promise((resolve, reject) => {
                    bcrypt.hash(userPass, 10, (error, hashedPassword) => {
                        if (error) reject(error);
                        resolve(hashedPassword);
                    });
                });
            } else {
                // If userPass is not provided, retain the existing hashed password
                hash = user.userPass;
            }
    
            // userProfile is always updated regardless of whether it is provided in the request body
    
            await editUser(firstName, lastName, gender, userRole, emailAdd, hash, userProfile, +req.params.userID);
            res.send(await getUsers());
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }
    ,
    removeUser: async (req, res)=>{
        // try{
            await deleteUser(req.params.userID)
            res.json(await getUsers())
        // }catch{
        //     console.log(error)
        //     res.status(500).json({error:"Internal server error"})
        // }
    },
  
    login:async (req,res)=>{
        
    }
    
}