import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

import heroRoutes from "./routes/hero.route.js";

dotenv.config({ path: ".env.local" });
const PORT = process.env.PORT;

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("DB connected successfully"))
    .catch((e) => console.log(e));

const app = express();

app.use(express.json());

app.use("/api/v1/", heroRoutes);

app.listen(PORT || 5000, () => {
    console.log(`Server is working on port ${PORT}`);
});
