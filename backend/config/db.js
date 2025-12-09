import mongoose from "mongoose";

export const connectDB = async()=> {
	await mongoose.connect('mongodb+srv://2003zerokali20_db_user:20031220@cluster0.z10r6lj.mongodb.net/Tomato-restaurant-').then(()=>console.log ("DB Connected"));

}
