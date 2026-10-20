import jwt from 'jsonwebtoken'

const authorize = (model) => {
    const authUser = (req , res , next) => {
        const token = req.cookies.token ; 
        if(!token)
        {
            return res.status(401).json({
                Message : "Login / Register First"
            })
        }
    }
}