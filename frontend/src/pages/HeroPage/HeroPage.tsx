import { FC, useEffect } from "react";
import { useParams } from "react-router-dom";

import styles from "./HeroPage.module.scss";
import { useHeroStore } from "../../store/heroes.store";
import Hero from "../../components/Hero/Hero";

const HeroPage: FC = () => {
    const { id } = useParams();
    const { fetchOneHero, oneHero, isLoading } = useHeroStore();

    useEffect(() => {
        fetchOneHero(id!);
    }, []);

    return (
        <div className={styles.hero}>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <Hero
                    _id={oneHero?._id!}
                    nickname={oneHero?.nickname!}
                    real_name={oneHero?.real_name!}
                    origin_description={oneHero?.origin_description!}
                    superpowers={oneHero?.superpowers!}
                    catch_phrase={oneHero?.catch_phrase}
                />
            )}
        </div>
    );
};

export default HeroPage;
