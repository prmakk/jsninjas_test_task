import { Hero } from "../models/hero.model.js";

export async function createHero(req, res) {
    try {
        const {
            nickname,
            real_name,
            origin_description,
            superpowers,
            catch_phrase,
        } = req.body;

        if (
            !nickname ||
            !real_name ||
            !origin_description ||
            !superpowers ||
            !catch_phrase
        ) {
            return res.status(400).json({
                success: false,
                message: "Please fill in all required fields.",
            });
        }

        const existingHeroByNickname = await Hero.findOne({
            nickname: nickname,
        });

        if (existingHeroByNickname) {
            return res.status(400).json({
                success: false,
                message: "Hero with this nickname already exists.",
            });
        }

        const existingHeroByName = await Hero.findOne({
            real_name: real_name,
        });

        if (existingHeroByName) {
            return res.status(400).json({
                success: false,
                message: "Hero with this name already exists.",
            });
        }

        const newHero = new Hero({
            nickname,
            real_name,
            origin_description,
            superpowers,
            catch_phrase,
        });

        await newHero.save();

        res.status(200).json({
            success: true,
            hero: { ...newHero._doc },
        });
    } catch (error) {
        console.log("Error in create controller: ", error.message);
        res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
}

export async function getAllHeroes(req, res) {
    try {
        const all_heroes = await Hero.find();

        res.status(200).json({ success: true, heroes: all_heroes });
    } catch (error) {
        console.log("Error in getAll controller: ", error.message);
        res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
}

export async function getOneHero(req, res) {
    try {
        const heroId = req.params.id;

        const hero = await Hero.findById({ _id: heroId });

        if (!hero) {
            return res.status(404).json({
                success: false,
                message: "Hero not found",
            });
        }

        res.json({
            success: true,
            hero: hero,
        });
    } catch (error) {}
}

export async function updateHero(req, res) {
    try {
        const heroId = req.params.id;
        const {
            nickname,
            real_name,
            origin_description,
            superpowers,
            catch_phrase,
        } = req.body;

        await Hero.updateOne(
            {
                _id: heroId,
            },
            {
                nickname,
                real_name,
                origin_description,
                superpowers,
                catch_phrase,
            }
        );

        res.status(200).json({
            success: true,
            message: "Hero updated successfully",
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Can't update hero",
        });
    }
}

export async function deleteHero(req, res) {
    try {
        const heroId = req.params.id;

        const hero = await Hero.findOneAndDelete({ _id: heroId });

        if (!hero) {
            return res.status(404).json({
                success: false,
                message: "Hero not found",
            });
        }

        res.json({
            success: true,
            message: "Hero deleted successfully",
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Can't get hero",
        });
    }
}
