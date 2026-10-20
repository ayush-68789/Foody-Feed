import FoodPartner from "../model/FoodPartner.js";
import createAuthController from "../services/authService.js";

const foodPartnerAuth = createAuthController(FoodPartner, "foodPartner");

const registerFoodPartner = foodPartnerAuth.register;
const loginFoodPartner = foodPartnerAuth.login;
const logoutFoodPartner = foodPartnerAuth.logout;

export { registerFoodPartner, loginFoodPartner, logoutFoodPartner };