import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { checkUser } from '../models/db.js';


const auth = async (req, res, next) => {
    // try {
        const { emailAdd, userPass } = req.body;
        console.log(emailAdd);
        const hasheduserPass = await checkUser(emailAdd);
        bcrypt.compare(userPass, hasheduserPass, (err, result) => {
            if (err) throw err;
            if (result === true) {
                console.log(emailAdd);
                const token = jwt.sign({ emailAdd: emailAdd }, process.env.SECRET_KEY, { expiresIn: '1hr' });
                console.log(token);
                res.cookie('token', token,{httpOnly:true, expiresIn: '1hr'})
                res.send({
                    msg: `You have logged in successfully}`
                })
                next()
            } else {
                res.send({
                    msg: 'Invalid emailAdd or userPass'
                });
            }
        });
    // } catch (error) {
    //     console.error('Invalid emailAdd or userPass:', error);
    //     res.status(404).send('Invalid emailAdd or userPass');
    // }
};

const authenticate =(req,res,next)=>{
    let {cookie} = req.headers
    const refTokens = {}
    let tokenInHeader = cookie && cookie.split('=')[1]
    if (tokenInHeader === null) {
        res.send("err").status(403)
    } else { 
        jwt.verify(tokenInHeader, process.env.SECRET_KEY, {expiresIn: '1d'}, (err, user) => {
            if (err) {
                if(err.name === 'TokenExpiredError'){
                    const refToken = req.headers['REFRESH_TOKEN'];
                    
                    if (refToken && refTokens[refToken]){
                        jwt.verify(refToken, process.env.REFRESH_TOKEN, (err, decoded) => {
                            if(err){
                                res.sendStatus(403)
                            } else {
                                const newRef = jwt.sign({emailAdd: decoded.emailAdd}, process.env.REFRESH_TOKEN, {expiresIn: '1d'});

                                res.setHeader('Authorization', newRef)

                                next();
                            }
                        })
                    }
                }
            }
            req.emailAdd = user;
        });

        next();
        
    }
}

export {auth, authenticate}