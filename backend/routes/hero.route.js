import e, { Router } from "express";
import {
    createHero,
    deleteHero,
    getAllHeroes,
    getOneHero,
    updateHero,
} from "../controllers/hero.controller.js";

const router = Router();

router.post("/create", createHero);
router.get("/heroes", getAllHeroes);
router.get("/heroes/:id", getOneHero);
router.put("/heroes/:id", updateHero);
router.delete("/delete/:id", deleteHero);

export default router;
