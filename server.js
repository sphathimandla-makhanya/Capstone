import express from 'express'
import cors from 'cors'
import {config} from 'dotenv'
import productsRouter from './routes/products.js'
import usersRouter from './routes/users.js'
import loginRouter from './routes/login.js'
import cookieParser from 'cookie-parser'
import auth from './middleware/middelware.js'


config();

const PORT = process.env.PORT || 8001
const app = express()
app.use(cors())
app.use(express.json())
app.use(cookieParser())
app.use('/products', productsRouter)

app.use(express.static('views'))
app.use('/users', usersRouter)
app.use('/login',auth, loginRouter)

app.listen(PORT, ()=>{
    console.log(`Running on http://localhost:${PORT}`);
})