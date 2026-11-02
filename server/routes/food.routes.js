import express from 'express' ;
import authorize from '../middlewares/auth.middleware.js';
import {createFood} from '../controllers/food.controller.js';
import FoodPartner from '../model/FoodPartner.js';
import upload from '../middlewares/upload.middleware.js' ;

const Router = express.Router() ; 

let authMiddleWare = authorize(FoodPartner) ; 


Router.post('/create-food', authMiddleWare , upload.single('video') , createFood) 

export default Router  ;