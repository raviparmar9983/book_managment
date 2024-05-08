import express,{ Express } from "express";
import dotenv from 'dotenv'
dotenv.config({path:'src/config.env'})
import bookRoutes from './Routes/bookRoutes'
import authorRoutes from './Routes/authorRoutes'
import userRoutes from './Routes/userRoutes'
import adminRoutes from './Routes/adminRoutes'
const app:Express=express();

app.use(express.json())

app.use('/library/admin',adminRoutes)
app.use('/library/user',userRoutes)
app.use('/library/book',bookRoutes)
app.use('/library/author',authorRoutes)


export default app