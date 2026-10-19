import FoodPartner from "../model/FoodPartner.js";
import createAuthController from "../services/authService.js";

const {
    register: registerFoodPartner,
    login: loginFoodPartner,
    logout: logoutFoodPartner,
} = createAuthController(FoodPartner, "foodPartner");

export { registerFoodPartner, loginFoodPartner, logoutFoodPartner };