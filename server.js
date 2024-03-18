import express from 'express'
import cors from 'cors'
import {config} from 'dotenv'
import productsRouter from './routes/products.js'
import usersRouter from './routes/users.js'
// import bcrypt from 'bcrypt'
import loginRouter from './routes/login.js'
import cartRouter from './routes/cart.js'
import cookieParser from 'cookie-parser'
import {auth} from './middleware/middelware.js'    //



config();

const PORT = process.env.PORT || 9000
const app = express()
app.use(cors({
    origin:'http://localhost:8080',
    credentials:true
}))
app.use(express.json())
app.use(express.static('views'))
app.use(cookieParser())
app.use('/products', productsRouter)

app.use('/users', usersRouter)
app.use('/login',auth, loginRouter)
app.use('/cart', cartRouter)    //authenticate,

// app.post('/login', auth, async (req, res) => {
//     const { emailAdd } = req.body;
//     const token = jwt.sign({ emailAdd: emailAdd }, process.env.SECRET_KEY, { expiresIn: '2h' });
//     try {
//         const userInfo = await checkUser(emailAdd);
//         if (userInfo) {
//             // Set the SameSite attribute for the cookie
//             res.cookie('jwt', token);
//             res.json({
//                 msg: 'you have logged in',
//                 user: userInfo,
//                 token: token,
//             });
//         } else {
//             res.status(404).json({
//                 msg: 'User not found',
//             });
//         }
//     } catch (error) {
//         console.error('Error during login:', error);
//         res.status(500).json({
//             msg: 'Internal server error during login',
//         });
//     }
// });
app.listen(PORT, ()=>{
    console.log(`Running on http://localhost:${PORT}`);
})