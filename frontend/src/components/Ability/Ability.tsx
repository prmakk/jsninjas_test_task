import { FC } from "react";

import styles from "./Ability.module.scss";

interface IAbility {
    ability: string;
}

const Ability: FC<IAbility> = ({ ability }) => {
    return (
        <div className={styles.ability}>
            <p>{ability}</p>
        </div>
    );
};

export default Ability;
