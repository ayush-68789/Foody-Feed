import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const authService = (model, accountType) => {
    const register = async (req, res) => {
        try {
            const { userName, email, password, restaurantName, ownerName, phone, address } = req.body;
            if (!userName || !email || !password || (accountType === "foodPartner" && (!restaurantName || !ownerName || !phone || !address))) 
            {
                return res.status(400).json({
                    message: "Please provide all required details",
                });
            }
            const user = await model.findOne({
                $or: [
                    { userName }, 
                    { email }
                ] 
            });
            if (user) 
            {
                return res.status(409).json({ 
                    message: "An account with this username or email already exists" 
                });
            }
            if (!process.env.JWT_SECRET) throw new Error("JWT_SECRET is not configured");

            const saltRounds = Number(process.env.SALT_ROUNDS) || 10;
            const hashedPass = await bcrypt.hash(password, saltRounds);
            const newUser = await model.create({
                userName: accountType === "foodPartner" ? ownerName : userName,
                email: email.trim().toLowerCase(),
                password: hashedPass,
                ...(accountType === "foodPartner" ? { restaurantName, ownerName, phone, address } : {}),
            });
            const token = jwt.sign({ 
                userId: newUser._id, 
                account_type: accountType 
            }, process.env.JWT_SECRET, 
            { expiresIn: "7d" });

            res.cookie("token", token, { 
                httpOnly: true, 
                sameSite: "lax", 
                secure: process.env.NODE_ENV === "production", 
                maxAge: 7 * 24 * 60 * 60 * 1000 
            });
            return res.status(201).json({
                message: "Account registered successfully",
                user: { 
                    id: newUser._id, 
                    userName: newUser.userName, 
                    email: newUser.email, 
                    accountType 
                },
            });
        } catch (err) {
            if (err.code === 11000) return res.status(409).json({ message: "An account with this username or email already exists" });
            console.error(err);
            return res.status(500).json({ message: "Unable to register account" });
        }
    };
    
    const login = async (req, res) => {
        try {
            const { identifier, email, password } = req.body;
            const loginId = (identifier || email || "").trim().toLowerCase();
            if (!loginId || !password){
                return res.status(400).json({ 
                    message: "Email and password are required" 
                });
            }
            const account = await model.findOne({ 
                $or: [
                    { userName: loginId }, 
                    { email: loginId }
                ] 
            });
            if (!account || !(await bcrypt.compare(password, account.password))) return res.status(401).json({ message: "Invalid email or password" });
            if (!process.env.JWT_SECRET) throw new Error("JWT_SECRET is not configured");

            const token = jwt.sign({ 
                userId: account._id, 
                account_type: accountType 
            }, process.env.JWT_SECRET, 
            { expiresIn: "7d"});

            res.cookie("token", token, { 
                httpOnly: true, 
                sameSite: "lax", 
                secure: process.env.NODE_ENV === "production", 
                maxAge: 7 * 24 * 60 * 60 * 1000 
            });
            return res.status(200).json({ 
                message: "Logged in successfully", 
                user: { 
                    id: account._id, 
                    userName: account.userName, 
                    email: account.email, 
                    accountType 
                } 
            });
        } catch (err) {
            console.error(err);
            return res.status(500).json({ message: "Unable to log in" });
        }
    };
    
    const logout = async (req, res) => {
        res.clearCookie("token", { httpOnly: true, sameSite: "lax", secure: process.env.NODE_ENV === "production" });
        res.status(200).json({
            Message: "Logged Out",
        });
    };

    return {
        register ,
        login ,
        logout 
    }
}

export default authService ;
