import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const authService = (model , accountType) => {
    const register = async (req, res) => {
        try {
            const { userName, email, password } = req.body;
            if (!userName || !email || !password) {
                return res.status(400).json({
                    Error: "Something is Missing",
                });
            }
            const user = await model.findOne({
                $or: [{ userName }, { email }],
            });
            if (user) {
                return res.status(409).json({
                    Message: "User already exists",
                });
            }
    
            let salt = await bcrypt.genSalt(Number(process.env.SALT_ROUNDS));
            let hashedPass = await bcrypt.hash(password, salt);
    
            const newUser = await model.create({
                userName,
                email,
                password: hashedPass,
            });
    
            let token = jwt.sign(
                {
                    userId: newUser._id,
                    account_type: accountType ,
                },
                process.env.JWT_SECRET,
                {
                    expiresIn: "7d",
                },
            );
    
            res.cookie("token", token);
            return res.status(201).json({
                Message: "User registered successfully",
                newUser,
            });
        } catch (err) {
            console.log(err);
            return res.status(400).json({
                Error: err,
            });
        }
    };
    
    const login = async (req, res) => {
        let { identifier, password } = req.body;
        let userExist = await model.findOne({
            $or: [{ userName: identifier }, { email: identifier }],
        });
        if (!userExist) {
            return res.status(404).json({
                Message: "Register First User not Found",
            });
        }
    
        let passCheck = await bcrypt.compare(password, userExist.password);
        if (!passCheck) {
            return res.status(409).json({
                Message: "Invalid Credentials",
            });
        }
    
        const token = jwt.sign(
            {
                userId: userExist._id,
                account_type: accountType ,
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "7d",
            },
        );
        res.cookie("token", token);
        res.status(200).json({
            Message: "User Logged in",
            userExist,
        });
    };
    
    const logout = async (req, res) => {
        res.clearCookie("token");
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