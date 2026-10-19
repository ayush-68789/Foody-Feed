import User from "../model/User.js";
import createAuthController from "../services/authService.js";

const {
    register: registerUser,
    login: loginUser,
    logout: logoutUser,
} = createAuthController(User, "user");

export { registerUser, loginUser, logoutUser };