import express from 'express' ;
import multer from 'multer' ;
import authorize from '../middlewares/auth.middleware.js';
import {createFood} from '../controllers/food.controller.js';
import FoodPartner from '../model/FoodPartner.js';

const Router = express.Router() ; 

let authMiddleWare = authorize(FoodPartner) ; 

const upload = multer({
    storage : multer.memoryStorage() 
})

Router.post('/create-food', authMiddleWare , upload.single('video') , createFood) 

export default Router  ;