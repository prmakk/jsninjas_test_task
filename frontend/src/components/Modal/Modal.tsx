import { FC, useState } from "react";
import { CircleX, Upload } from "lucide-react";

import { useHeroStore } from "../../store/heroes.store";

import styles from "./Modal.module.scss";

interface IModal {
    onClose: () => void;
}

const Modal: FC<IModal> = ({ onClose }) => {
    const [nickname, setNickname] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [abilities, setAbilities] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [catch_phrase, setCatchPhrase] = useState<string>("");
    const { addHero } = useHeroStore();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        addHero({
            nickname,
            real_name: name,
            origin_description: description,
            superpowers: abilities.split(","),
            catch_phrase,
        });
        onClose(); //close modal
    };

    return (
        <div className={styles.modal}>
            <form onSubmit={handleSubmit}>
                <div className={styles.close} onClick={onClose}>
                    <CircleX color="#595cf6" size={36} />
                </div>

                <div className={styles.field}>
                    <label htmlFor="heroname">
                        Hero name <span>*</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Spider-man"
                        required
                        name="heroname"
                        value={nickname}
                        readOnly={false}
                        onChange={(e) => setNickname(e.target.value)}
                    />
                </div>

                <div className={styles.field}>
                    <label htmlFor="name">
                        Real name <span>*</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Peter Parker"
                        required
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div className={styles.field}>
                    <label htmlFor="abilities">
                        Abilities (use coma to separate them) <span>*</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Flight"
                        required
                        name="abilities"
                        value={abilities}
                        onChange={(e) => setAbilities(e.target.value)}
                    />
                </div>

                <div className={styles.field}>
                    <label htmlFor="desc">
                        Description <span>*</span>
                    </label>
                    <textarea
                        placeholder="Description"
                        required
                        name="desc"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>

                <div className={styles.field}>
                    <label htmlFor="phrase">
                        Catch phrase <span>*</span>
                    </label>
                    <input
                        type="text"
                        placeholder="With great power comes great responsibility"
                        required
                        name="phrase"
                        value={catch_phrase}
                        onChange={(e) => setCatchPhrase(e.target.value)}
                    />
                </div>

                <div className={styles.upload}>
                    <label htmlFor="file">
                        Upload image
                        <div className={styles.icon}>
                            <Upload size={64} />
                        </div>
                        <input id="file" type="file" name="file" />
                    </label>
                </div>

                <button type="submit">Add hero</button>
            </form>
        </div>
    );
};

export default Modal;
