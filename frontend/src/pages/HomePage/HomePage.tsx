import { FC, useEffect } from "react";

import styles from "./HomePage.module.scss";

import Hero from "../../components/Hero/Hero";
import { useHeroStore } from "../../store/heroes.store";

const HomePage: FC = () => {
    const { fetchAllHeroes, allHeroes, isLoading } = useHeroStore();

    useEffect(() => {
        if (!allHeroes) {
            fetchAllHeroes();
        }
    }, []);

    return (
        <div className={styles.home}>
            {isLoading ? <p>Loading...</p> : null}
            {allHeroes?.map((hero) => (
                <Hero
                    key={hero._id}
                    _id={hero._id}
                    nickname={hero.nickname}
                    real_name={hero.real_name}
                    origin_description={hero.origin_description}
                    superpowers={hero.superpowers}
                />
            ))}
        </div>
    );
};

export default HomePage;
