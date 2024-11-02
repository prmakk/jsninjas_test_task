import { FC, useEffect, useState } from "react";

import styles from "./HomePage.module.scss";

import Hero from "../../components/Hero/Hero";
import { useHeroStore } from "../../store/heroes.store";
import PaginationList from "../../components/PaginationList/PaginationList";

const HomePage: FC = () => {
    const { fetchAllHeroes, allHeroes, isLoading, setIsDeleted, isDeleted } =
        useHeroStore();

    const [currentPage, setCurrentPage] = useState<number>(1);
    const heroesPerPage = 5;
    const indexOfLastHero = currentPage * heroesPerPage;
    const indexOfFirstHero = indexOfLastHero - heroesPerPage;
    const currentHeroes = allHeroes
        ? allHeroes.slice(indexOfFirstHero, indexOfLastHero)
        : []; //if we get data from the server, we can slice and display it
    const totalPages = allHeroes
        ? Math.ceil(allHeroes!.length / heroesPerPage)
        : 0;

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, [currentPage]);

    useEffect(() => {
        if (!allHeroes) {
            fetchAllHeroes();
        }
    }, []);

    useEffect(() => {
        if (isDeleted) {
            setIsDeleted(false); //if we don't reset this state on the MainPage, isDeleted will be true on the HeroPage
        }
    }, [isDeleted]);

    return (
        <div className={styles.home}>
            {isLoading ? <p>Loading...</p> : null}
            {currentHeroes?.map((hero) => (
                <Hero
                    key={hero._id}
                    _id={hero._id}
                    nickname={hero.nickname}
                    real_name={hero.real_name}
                    origin_description={hero.origin_description}
                    superpowers={hero.superpowers}
                />
            ))}
            {typeof allHeroes !== null ? (
                <PaginationList
                    totalPages={totalPages}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
            ) : null}
        </div>
    );
};

export default HomePage;
