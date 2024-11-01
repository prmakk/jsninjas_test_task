import { FC } from "react";

import styles from "./Header.module.scss";
import { Link } from "react-router-dom";

const Header: FC = () => {
    return (
        <header className={styles.header}>
            <Link to={"/"}>SuperheroeS</Link>
            <button>Add hero</button>
        </header>
    );
};

export default Header;
