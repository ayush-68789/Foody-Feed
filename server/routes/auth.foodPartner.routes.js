import express from "express";
import {
    registerFoodPartner,
    loginFoodPartner,
    logoutFoodPartner,
} from "../controllers/auth.foodPartner.controller.js";

const Router = express.Router();

Router.post("/partner/register", registerFoodPartner);
Router.post("/partner/login", loginFoodPartner);
Router.post("/partner/logout", logoutFoodPartner);

export default Router;
