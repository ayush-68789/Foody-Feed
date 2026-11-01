import Food from '../model/Food.Item.js' ; 

const createFood = async(req , res) => {
    const foodPartner = req.userDetails ;
    console.log(req.body) ; 
    console.log(req.file);
    // console.log(foodPartner)  ;
    res.send("Food item addeds")
}

export {
    createFood
}