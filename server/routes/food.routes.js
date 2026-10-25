import express from 'express' ;
import authorize from '../middlewares/auth.middleware';
import foodController from '../controllers/food.controller.js' 
const Router = express.Router() ; 

let authMiddleWare = authorize('FoodPartner').authUser ; 

Router.post('/', authMiddleWare , foodController) 

export default Router  ;