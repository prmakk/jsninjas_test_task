import { FC, useState } from "react";
import { Pencil, Trash } from "lucide-react";

import styles from "./Hero.module.scss";
import Ability from "../Ability/Ability";

const Hero: FC = () => {
    const [isHovered, setIsHovered] = useState<boolean>(false);

    return (
        <div
            className={styles.hero}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {isHovered ? (
                <div className={styles.nav}>
                    <Pencil size={18} />
                    <Trash size={18} />
                </div>
            ) : null}

            <div className={styles.image}></div>

            <div className={styles.info}>
                <h3 className={styles.nickname}>Superman</h3>
                <p className={styles.name}>Clark Kent</p>
                <div className={styles.abilities}>
                    <Ability ability="Flight" />
                    <Ability ability="Regeneration" />
                </div>
                <p className={styles.description}>
                    He was born Kal-El on the planet Krypton, before being
                    rocketed to Earth as an infant by his scientist father
                    Jor-El, moments before Krypton's destruction…
                </p>
            </div>
        </div>
    );
};

export default Hero;
