import express from 'express' ;
import authorize from '../middlewares/auth.middleware.js';
import {createFood} from '../controllers/food.controller.js';
import { getFood } from '../controllers/food.controller.js';
import FoodPartner from '../model/FoodPartner.js';
import User from '../model/User.js' ;
import upload from '../middlewares/upload.middleware.js' ;

const Router = express.Router() ; 

let authFoodPartner = authorize(FoodPartner) ;
let authUser = authorize(User) ; 


Router.post('/create-food', authFoodPartner , upload.single('video') , createFood) ;

Router.get('/get-food' , authUser , getFood) ; 

export default Router  ;