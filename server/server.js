import express from 'express' ;
import { configDotenv } from 'dotenv';
import connectDB from './config/db.js';
import authRoutes from './routes/auth.user.routes.js' ; 
import foodPartnerRoutes from './routes/auth.foodPartner.routes.js'
import cookieParser from 'cookie-parser';
import morgan from 'morgan' ;

const app = express() ;
configDotenv() ;

connectDB() ; 

app.use(express.json()) ;
app.use(cookieParser()) ;
app.use(morgan('dev')) ;
app.use(express.urlencoded({
    'extended' : true
}))

app.use('/auth', authRoutes) ;
app.use("/auth/food-partner", foodPartnerRoutes);

const PORT = process.env.PORT ;
app.listen(PORT, ()=> {
    console.log('-'.repeat(28)) ; 
    console.log(`Server Running at PORT : ${PORT}`) ;
    console.log('-'.repeat(28)) ; 
})