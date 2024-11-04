import { Router } from "express";
import {
    createHero,
    deleteHero,
    getAllHeroes,
    getOneHero,
    updateHero,
} from "../controllers/hero.controller.js";
import multer from "multer";

const router = Router();
const upload = multer({ dest: "backend/uploads" });

const uploadConfig = upload.single("file");

router.post("/create", uploadConfig, createHero);
router.get("/heroes", getAllHeroes);
router.get("/heroes/:id", getOneHero);
router.put("/heroes/:id", updateHero);
router.delete("/delete/:id", deleteHero);

export default router;
