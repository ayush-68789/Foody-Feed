import jwt from 'jsonwebtoken'

const authorize = (model) => {
    const authUser = async (req , res , next) => {
        try{
            const token = req.cookies.token ; 
            if(!token)
            {
                return res.status(401).json({
                    Message : "Login / Register First"
                })
            }
            const decoded = jwt.verify(token , process.env.JWT_SECRET); 
            const id = decoded.userId ;
            const user = await model.findById(id) ;
            req.userDetails = user ;
            next() ;
        }
        catch(err)
        {  
            return res.status(401).json({
                message: "Invalid token",
            });
        }
    }
    return authUser ;
}

export default authorize ;