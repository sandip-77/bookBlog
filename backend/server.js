import express from 'express'
import colors from 'colors'
import dotenv from 'dotenv'
import connectDB from './db.js'
import { errHandler, notFound } from './middleware/errMiddleware.js'
import postRoutes from './routes/postRoutes.js';
import categoryRoutes from './routes/categoryRoutes.js';
import morgan from 'morgan'

const app = express()
app.use(express.json())
dotenv.config()
connectDB()

if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}

app.get('/', (req, res) => {
    res.send('API is running...')
})



app.use('/api/posts', postRoutes);
app.use('/api/categories', categoryRoutes);


app.use(notFound)
app.use(errHandler)




const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`server running in ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold))