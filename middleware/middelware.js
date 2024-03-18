import { config } from 'dotenv';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
import { checkUser,getUser,getUserRole} from '../models/db.js';

config()

const auth = async (req, res, next) => {
    const { userPass, emailAdd } = req.body;
    const hashedPassword = await checkUser(emailAdd);

    bcrypt.compare(userPass, hashedPassword, (err, result) => {
        if (err) throw err;
        if (result === true) {
            getUserRole(emailAdd)
                .then(userRole => {
                    getUser(emailAdd) // Assuming you have a function to get all user details
                        .then(userDetails => {
                            const tokenPayload = {
                                emailAdd: emailAdd,
                                userRole: userRole,
                                // Include other user details here
                                userID: userDetails.userID,
                                firstName: userDetails.firstName,
                                lastName: userDetails.lastName,
                                // Add more fields as needed
                            };
                            const token = jwt.sign(tokenPayload, process.env.SECRET_KEY, { expiresIn: '1h' });
                            res.cookie('jwt', token, { httpOnly: false, expiresIn: '1h' });
                            res.send({
                                token: token,
                                msg: 'I have logged in!!! YAY!!!',
                                user: tokenPayload
                            });
                            next();
                        })
                        .catch(error => {
                            console.error('Error getting user details:', error);
                            res.status(500).json({ error: 'Internal server error' });
                        });
                })
                .catch(error => {
                    console.error('Error getting user role:', error);
                    res.status(500).json({ error: 'Internal server error' });
                });
        } else {
            res.send({ msg: 'The email or password is incorrect' });
        }
    });
};





// const auth = async (req, res, next) => {
//     try {
//         const { emailAdd, userPass } = req.body;
//         const userInfo = await checkUser(emailAdd);
//         if (!userInfo) {
//             return res.status(401).json({
//                 msg: 'User not found or invalid credentials',
//             });
//         }
//         const result = await bcrypt.compare(userPass, userInfo.userPass);
//         if (result) {
//             const tokenPayload = {
//                 userID: userInfo.userID,
//                 firstName: userInfo.firstName,
//                 lastName: userInfo.lastName,
//                 emailAdd: emailAdd,
//                 gender: userInfo.gender,
//                 userProfile: userInfo.userProfile // Include other user details as needed
//             };
//             const token = jwt.sign(tokenPayload, process.env.SECRET_KEY, { expiresIn: '2h' });
//             res.cookie('jwt', token, {
//                 sameSite: 'Lax', // You can set it to 'strict' or 'lax' depending on your requirements
//                 // Other cookie options...
//             });
//             res.json({
//                 msg: 'You have logged in',
//                 user: userInfo,
//                 token: token,
//             });
//         } else {
//             res.status(401).json({
//                 msg: 'Invalid credentials',
//             });
//         }
//     } catch (error) {
//         console.error('Authentication error:', error);
//         res.status(500).json({
//             msg: 'Internal server error during authentication',
//         });
//     }
// };







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

const authenticate = (req, res, next) => {
    const tokenCookie = req.cookies.jwt;
    if (!tokenCookie) {
        return res.status(401).send({ error: 'Missing JWT token in cookies' });
    }
    jwt.verify(tokenCookie, process.env.SECRET_KEY, (err, user) => {
        if (err) {
            console.error('JWT Verification Error:', err.message);
            return res.status(401).send({ error: 'Failed to authenticate JWT token' });
        }
        console.log('Decoded User:', user);
        req.user = user;
        next();
    });
};
export{
    auth,authenticate
}












