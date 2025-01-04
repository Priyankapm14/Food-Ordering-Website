import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://foodproj:12345@cluster0.crw7h.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}