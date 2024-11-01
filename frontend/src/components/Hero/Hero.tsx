import { FC, useState } from "react";
import { Pencil, Trash } from "lucide-react";

import styles from "./Hero.module.scss";
import Ability from "../Ability/Ability";
import IHero from "../../types/types";
import { Link } from "react-router-dom";

const Hero: FC<IHero> = ({
    _id,
    nickname,
    real_name,
    origin_description,
    superpowers,
    catch_phrase,
}) => {
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
                <Link to={`/heroes/${_id}`}>
                    <h3 className={styles.nickname}>{nickname}</h3>
                </Link>
                <p className={styles.name}>{real_name}</p>
                <div className={styles.abilities}>
                    {superpowers?.map((power) => (
                        <Ability ability={power} key={power} />
                    ))}
                </div>
                <p className={styles.description}>{origin_description}</p>
                <p className={styles.phrase}>{catch_phrase}</p>
            </div>
        </div>
    );
};

export default Hero;
