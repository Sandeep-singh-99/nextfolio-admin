import mongoose from "mongoose";

const MONGODB_URI: string = process.env.MONGODB_URI!;

export async function ConnectDB() {
    if (!MONGODB_URI) {
        console.error("Please define the MONGODB_URI environment variable inside .env.local");
        process.exit(1);
    }
    try {
        await mongoose.connect(MONGODB_URI)
    } catch (error) {
        console.error("Error connecting to the database:", error);
        process.exit(1);
    }
}