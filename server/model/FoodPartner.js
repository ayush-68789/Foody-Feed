import mongoose from "mongoose";

const foodPartnerSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: [true, "Provide Username"],
        unique: [true, "Already Taken"],
        trim: true,
    },
    email: {
        type: String,
        required: [true, "Please Provide Email"],
        trim: true,
        unique: [true, "Already Exists"],
    },
    password: {
        type: String,
        required: [true, "Provide Password"],
        trim: true,
    }
},
{
    timestamps : true
}) ;

const FoodPartner = mongoose.model("FoodPartner", foodPartnerSchema);
export default FoodPartner ;