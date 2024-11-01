import { FC, useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";

import styles from "./Header.module.scss";
import Modal from "../Modal/Modal";

const Header: FC = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    return (
        <header className={styles.header}>
            {/* PORTALS SECTION FOR MODALS */}
            {isModalOpen &&
                createPortal(
                    //sending modal to the top of DOM
                    <Modal onClose={() => setIsModalOpen(false)} />,
                    document.getElementById("modal-root")!
                )}
            <Link to={"/"}>SuperheroeS</Link>
            <button onClick={() => setIsModalOpen(true)}>Add hero</button>
        </header>
    );
};

export default Header;
