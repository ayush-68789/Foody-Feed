import express from 'express' ; 
import { registerUser , loginUser , logoutUser } from '../controllers/auth.user.controller.js';

const Router = express.Router() ;

Router.post('/user/register', registerUser) ;
Router.post('/user/login', loginUser) ;
Router.post('/user/logout', logoutUser) ;

export default Router ;