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
    origin:'https://capstone-49b4c.web.app/login',
    credentials:true
}))
app.use(express.json())
app.use(express.static('views'))
app.use(cookieParser())
app.use('/products', productsRouter)

app.use('/users', usersRouter)
app.use('/login',auth, loginRouter)
app.use('/cart', cartRouter)    //authenticate,

app.listen(PORT, ()=>{
    console.log(`Running on http://localhost:${PORT}`);
})