import { FC, useState } from "react";
import { CircleX, Upload } from "lucide-react";

import { useHeroStore } from "../../store/heroes.store";

import styles from "./Modal.module.scss";

interface IModal {
    onClose: () => void;
    isForEdit: boolean;
    id: string;
    nick: string;
    real_name: string;
    origin_description: string;
    superpowers: [];
    phrase?: string;
}

const Modal: FC<IModal> = ({
    onClose,
    isForEdit,
    id,
    nick,
    real_name,
    origin_description,
    superpowers,
    phrase,
}) => {
    const [nickname, setNickname] = useState<string>(nick || "");
    const [name, setName] = useState<string>(real_name || "");
    const [abilities, setAbilities] = useState<string>(
        Array.isArray(superpowers) ? superpowers.join(",") : ""
    );
    const [description, setDescription] = useState<string>(
        origin_description || ""
    );
    const [catch_phrase, setCatchPhrase] = useState<string>(phrase || "");
    const [file, setFile] = useState<File | undefined>(undefined);
    const { addHero, updateHero, fetchOneHero } = useHeroStore();

    const handleOnChange = (e: React.FormEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement & {
            files: FileList;
        };
        setFile(target.files[0]);
    };

    const handleCreateSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("nickname", nickname);
        formData.append("real_name", name);
        formData.append("origin_description", description);
        formData.append("superpowers", abilities);
        formData.append("catch_phrase", catch_phrase);

        if (typeof file !== "undefined") {
            formData.append("file", file);
        }

        addHero(formData);

        onClose(); //close modal
    };

    const handleEditSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        updateHero(id, {
            nickname,
            real_name: name,
            origin_description: description,
            superpowers: abilities.split(","),
            catch_phrase,
        });
        fetchOneHero(id);
        onClose(); //close modal
    };

    return (
        <div className={styles.modal}>
            <form onSubmit={isForEdit ? handleEditSubmit : handleCreateSubmit}>
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
                        <input
                            id="file"
                            type="file"
                            name="file"
                            onChange={handleOnChange}
                        />
                    </label>
                </div>

                {isForEdit ? (
                    <button type="submit">Edit hero</button>
                ) : (
                    <button type="submit">Add hero</button>
                )}
            </form>
        </div>
    );
};

export default Modal;
