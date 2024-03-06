import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { checkUser } from '../models/db.js';


const auth = async (req, res, next) => {
    try {
        const { emailAdd, userPass, userName } = req.body;
        console.log(emailAdd);
        const hasheduserPass = await checkUser(emailAdd);
        bcrypt.compare(userPass, hasheduserPass, (err, result) => {
            if (err) throw err;
            if (result === true) {
                console.log(emailAdd);
                const token = jwt.sign({ emailAdd: emailAdd }, process.env.SECRET_KEY, { expiresIn: '2h' });
                console.log(token);
                res.send({
                    token: token,
                    msg: `You have logged in successfully ${checkUser()}`
                });
            } else {
                res.send({
                    msg: 'Invalid emailAdd or userPass'
                });
            }
        });
    } catch (error) {
        console.error('Invalid emailAdd or userPass:', error);
        res.status(404).send('Invalid emailAdd or userPass');
    }
};

export default auth