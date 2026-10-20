import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
    name: {
        type: String,
        trim : true,
        required: true,
    },
    video: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    foodPartner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "FoodPartner",
    }
});

const FoodItem = mongoose.model("FoodItem", foodSchema);

export default FoodItem ;