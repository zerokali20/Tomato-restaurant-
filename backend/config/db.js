import mongoose from "mongoose";

export const connectDB = async () => {
	try {
		const envUri = process.env.MONGO_URI;
		const user = process.env.DB_USER;
		const pass = process.env.DB_PASS;
		const dbName = process.env.DB_NAME || "Tomato-restaurant-";

		const uri = envUri
			? envUri
			: `mongodb+srv://${user}:${encodeURIComponent(pass)}@cluster0.z10r6lj.mongodb.net/${dbName}?retryWrites=true&w=majority`;

		await mongoose.connect(uri);
		console.log("DB Connected");
	} catch (err) {
		console.error("DB connection error:", err.message || err);
		process.exit(1);
	}
};
