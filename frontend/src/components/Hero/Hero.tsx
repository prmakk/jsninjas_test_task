import { FC, useState } from "react";
import { Pencil, Trash } from "lucide-react";

import styles from "./Hero.module.scss";
import Ability from "../Ability/Ability";
import IHero from "../../types/types";
import { Link } from "react-router-dom";
import { createPortal } from "react-dom";
import { useHeroStore } from "../../store/heroes.store";
import Modal from "../Modal/Modal";

const Hero: FC<IHero> = ({
    _id,
    nickname,
    real_name,
    origin_description,
    superpowers,
    catch_phrase,
}) => {
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [isForEdit, setIsForEdit] = useState<boolean>(false);
    const { deleteHero } = useHeroStore();

    const handleEditForm = () => {
        setIsModalOpen(true);
        setIsForEdit(true);
    };

    return (
        <div
            className={styles.hero}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* PORTALS SECTION FOR MODALS */}
            {isModalOpen &&
                createPortal(
                    //sending modal to the top of DOM
                    <Modal
                        onClose={() => setIsModalOpen(false)}
                        isForEdit={isForEdit}
                        id={_id}
                        nick={nickname}
                        real_name={real_name}
                        origin_description={origin_description}
                        superpowers={superpowers}
                        phrase={catch_phrase}
                    />,
                    document.getElementById("modal-root")!
                )}
            {isHovered ? (
                <div className={styles.nav}>
                    {location.pathname !== "/" ? ( //we can't edit hero from the main page
                        <Pencil size={18} onClick={() => handleEditForm()} />
                    ) : null}
                    <Trash size={18} onClick={() => deleteHero(_id)} />
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
