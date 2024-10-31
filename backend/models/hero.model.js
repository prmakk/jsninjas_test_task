import { Schema, model } from "mongoose";

const heroSchema = new Schema({
    nickname: {
        type: String,
        required: true,
        unique: true,
    },
    real_name: {
        type: String,
        required: true,
        unique: true,
    },
    origin_description: {
        type: String,
        required: true,
    },
    superpowers: {
        type: Array,
        default: [],
        required: true,
    },
    catch_phrase: {
        type: String,
        required: true,
    },
    images: {
        type: Array,
        default: [],
    },
});

export const Hero = model("Hero", heroSchema);
