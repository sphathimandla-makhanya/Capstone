import { config } from 'dotenv';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { checkUser, userRole } from '../models/db.js';

config()


const auth=async(req,res,next)=>{
    const {userPass,emailAdd}=req.body
    const hashedPassword=await checkUser(emailAdd)
    let isUser = await userRole(emailAdd)
    bcrypt.compare(userPass,hashedPassword,(err,result)=>{
        if(err) throw err
        if(result === true){
            const {emailAdd}=req.body
            const token= jwt.sign({emailAdd:emailAdd},process.env.SECRET_KEY,{expiresIn:'1h'})
            res.cookie('jwt', token, { httpOnly: false, expiresIn:'1h'})
            res.send({
                token:token, 
                msg:'i have logged in!!! YAY!!!',
                user:isUser
            })
            next()
        }else{
            res.send({msg:'The emailAdd or password is incorrect'})
            
        }
    })
} 
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












// const auth = async (req, res, next) => {
//     // try {
//         const { emailAdd, userPass } = req.body;
//         // console.log(emailAdd);
//         const hasheduserPass = await checkUser(emailAdd);
//         await bcrypt.compare(userPass, hasheduserPass, (err, result) => {
//             if (err) throw err;
//             if (result === true) {
//                 // console.log(emailAdd);
//                 const {emailAdd}=req.body
//                 const token = jwt.sign({ emailAdd: emailAdd}, process.env.SECRET_KEY, { expiresIn: '7h' });
//                 // console.log(token);
//                 res.cookie('jwt', token,{httpOnly:false})
//                 res.send({
//                     msg: `You have logged in successfully}`
//                 })
//                 next()
//             } else {
//                 res.send({
//                     msg: 'Invalid emailAdd or userPass'
//                 });
//             }
//         });
//     // } catch (error) {
//     //     console.error('Invalid emailAdd or userPass:', error);
//     //     res.status(404).send('Invalid emailAdd or userPass');
//     // }
// };

// // const authenticate =(req,res,next)=>{
// //     let {cookie} = req.headers
// //     const refTokens = {}
// //     let tokenInHeader = cookie && cookie.split('=')[1]
// //     if (tokenInHeader === null) {
// //         res.send("err").status(403)
// //     } else { 
// //         jwt.verify(tokenInHeader, process.env.SECRET_KEY, {expiresIn: '7d'}, (err, user) => {
// //             if (err) {
// //                 if(err.name === 'TokenExpiredError'){
// //                     const refToken = req.headers['REFRESH_TOKEN'];
                    
// //                     if (refToken && refTokens[refToken]){
// //                         jwt.verify(refToken, process.env.REFRESH_TOKEN, (err, decoded) => {
// //                             if(err){
// //                                 res.sendStatus(403)
// //                             } else {
// //                                 const newRef = jwt.sign({emailAdd: decoded.emailAdd}, process.env.REFRESH_TOKEN, {expiresIn: '7d'});

// //                                 res.setHeader('Authorization', newRef)

// //                                 next();
// //                             }
// //                         })
// //                     }
// //                 }
// //             }
// //             req.emailAdd = user;
// //         });

// //         next();
        
// //     }
// // }

// const authenticate = (req,res,next) =>{
//     let {cookie}= req.headers
//     let tokenInHeader=cookie && cookie.split('=')[1]
//     if (tokenInHeader){res.sendStatus(401)}
//     jwt.verify(tokenInHeader,process.env.SECRET_KEY,(err,user)=>{
//         if(err) return res.sendStatus(403)
//         req.emailAdd=user
//         next()
//     } )
// }


// // const authenticate = (req, res, next) => {
// //     try {
// //         const token = req.headers.cookie?.split('=')[1];
// //         if (!token) {
// //             return res.status(401).json({ msg: 'Unauthorized' });
// //         }

// //         jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
// //             if (err) {
// //                 console.error(err);
// //                 return res.status(403).json({ msg: 'Forbidden' });
// //             }
// //             req.emailAdd = decoded.emailAdd;
// //             next();
// //         });
// //     } catch (error) {
// //         console.error(error);
// //         res.status(500).json({ error: 'Internal server error' });
// //     }
// // };

// export {auth, authenticate}