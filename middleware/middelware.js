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












