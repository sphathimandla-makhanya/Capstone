import express from 'express'
import cors from 'cors'
import {config} from 'dotenv'
import productsRouter from './routes/products.js'
config()

const PORT = process.env.PORT || 8001
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static('views'))
app.use('/products', productsRouter)

app.listen(PORT, ()=>{
    console.log(`Running on http://localhost:${PORT}`);
})
