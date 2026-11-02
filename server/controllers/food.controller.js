import Food from "../model/Food.Item.js";
import uploadFile from "../services/storage.service.js";
import {v4 as uuid} from  'uuid' ; 

const createFood = async (req, res) => {
    try {
        const { name, desc } = req.body;
        const foodPartner = req.userDetails?._id;

        if (!req.file) {
            return res.status(400).json({
                message: "Food video is required",
            });
        }

        const videoID = uuid() ; 
        const uploadedVideo = await uploadFile(req.file.buffer, videoID);

        const food = await Food.create({
            name,
            description: desc,
            video: uploadedVideo.secure_url,
            foodPartner,
        });

        return res.status(201).json({
            message: "Food created successfully",
            food,
        });
    } catch (error) {
        console.error("Food upload error:", error);

        return res.status(500).json({
            message: "Failed to create food",
            error: error.message,
        });
    }
};
export {
    createFood
}