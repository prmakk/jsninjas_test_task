import { FC } from "react";

import styles from "./HomePage.module.scss";

import Hero from "../../components/Hero/Hero";

const HomePage: FC = () => {
    return (
        <div className={styles.home}>
            <Hero />
            <Hero />
            <Hero />
        </div>
    );
};

export default HomePage;
