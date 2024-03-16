import { config } from 'dotenv';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { checkUser,getUserRole } from '../models/db.js';

config()

// const auth = async (req, res, next) => {
//     const { userPass, emailAdd } = req.body
//     try {
//         const hashedPassword = await checkUser(emailAdd)
//         bcrypt.compare(userPass, hashedPassword, (err, result) => {
//             if (err) {
//                 return res.status(500).json({ error: err.message });
//             }
//             if (result === true) {
//                 const token = jwt.sign({ emailAdd: emailAdd }, process.env.SECRET_KEY, { expiresIn: '1h' })
//                 res.cookie('jwt', token, { httpOnly: false, expiresIn: '1h' })
//                 res.json({
//                     token: token,
//                     msg: 'Logged in successfully!'
//                 })
//                 next()
//             } else {
//                 res.status(401).json({ msg: 'The email or password is incorrect' })
//             }
//         })
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// }



const auth=async(req,res,next)=>{
    const {userPass,emailAdd}=req.body
    const hashedPassword=await checkUser(emailAdd)
    let userRole=await getUserRole(emailAdd)
    bcrypt.compare(userPass,hashedPassword,(err,result)=>{
        if(err) throw err
        if(result === true){
            const {emailAdd}=req.body
            const token= jwt.sign({emailAdd:emailAdd},process.env.SECRET_KEY,{expiresIn:'1h'})
            res.cookie('jwt', token, { httpOnly: false, expiresIn:'1h'})
            res.send({
                token:token, 
                msg:'i have logged in!!! YAY!!!',
                user:userRole
            })
            next()
        }else{
            res.send({msg:'The emailAdd or password is incorrect'})
            
        }
    })
} 

// const auth = async(req,res,next)=>{
//     // getting username and passsword from user
//     const {userPass,emailAdd}= req.body
//     const hasheduserPass=await checkUser(emailAdd)
//     let userRole=await getUserRole(emailAdd)
//     bcrypt.compare(userPass,hasheduserPass,(result)=>{
//         // if (error) throw error
//         if(result===true){
//             const {emailAdd} = req.body
//             const token = jwt.sign({emailAdd:emailAdd}, //jsonwebtoken does not authenticate but they allow the user access as long as they have a token
//             process.env.SECRET_KEY,{expiresIn:'1h'}) //secret key is in the .env file
//             // true only backend can access
//             res.cookie('jwt',token,{httpOnly:false})
//             res.send({
//                 // key name,value of the
//                 token:token,
//                 msg:"you have logged in",
//                 user:userRole
//             })
//            next()
//         }else{
//             res.send({msg:'The emailAdd or userPass is incorrect'})
//         }
//     })
// }

const authenticate=(req,res,next)=>{
    let {cookie}= req.headers
    let tokenInHeader=cookie && cookie.split('=')[1]

    if(tokenInHeader===null) res.sendStatus(401)

    jwt.verify(tokenInHeader,process.env.SECRET_KEY,(err,user)=>{
 

        if(err) return res.sendStatus(403)
        req.user=user
        next()
    })
}
export{
    auth,authenticate
}












