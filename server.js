import express from 'express'
import cors from 'cors'
import {config} from 'dotenv'
import productsRouter from './routes/products.js'
import usersRouter from './routes/users.js'
import loginRouter from './routes/login.js'
import cartRouter from './routes/cart.js'
import cookieParser from 'cookie-parser'
import {auth, authenticate} from './middleware/middelware.js'


config();

<<<<<<< HEAD
const PORT = process.env.PORT || 9000
=======
const PORT = process.env.PORT || 9522
>>>>>>> 1da3cf09154db98ba67f3b0c85718a7e86fc1932
const app = express()
app.use(cors())
app.use(express.json())
app.use(cookieParser())
app.use('/products', productsRouter)

app.use(express.static('views'))
app.use('/users', usersRouter)
app.use('/login',auth, loginRouter)
app.use('/cart', authenticate, cartRouter)

app.listen(PORT, ()=>{
    console.log(`Running on http://localhost:${PORT}`);
})