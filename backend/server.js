import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config({ path: ".env.local" });
const app = express();
const PORT = process.env.PORT;

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("DB connected successfully"))
    .catch((e) => console.log(e));

app.listen(PORT || 5000, () => {
    console.log(`Server is working on port ${PORT}`);
});
