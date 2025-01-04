import foodModel from '../models/foodModel.js';
import fs from 'fs';

// Add food item
const addFood = async (req, res) => {
    try {
        // Check if the request has a file (image)
        if (!req.file) {
            return res.status(400).json({ success: false, message: "Image is required." });
        }

        // Extract filename of the uploaded image
        const image_filename = req.file.filename;

        // Create a new food item using the request body and image filename
        const food = new foodModel({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            category: req.body.category,
            // image: image_filename
        });

        // Save the food item to the database
        await food.save();
        return res.status(200).json({ success: true, message: "Food Added" });

    } catch (error) {
        console.error("Error adding food:", error);

        // If there's an error, return a detailed response
        return res.status(500).json({ success: false, message: "An error occurred while adding the food." });
    }
};

export { addFood };

