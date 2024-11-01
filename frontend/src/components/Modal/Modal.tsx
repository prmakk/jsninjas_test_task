import { FC } from "react";
import { CircleX, Upload } from "lucide-react";

import styles from "./Modal.module.scss";

interface IModal {
    onClose: () => void;
}

const Modal: FC<IModal> = ({ onClose }) => {
    return (
        <div className={styles.modal}>
            <form>
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
                    />
                </div>

                <div className={styles.field}>
                    <label htmlFor="abilities">
                        Abilities <span>*</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Flight"
                        required
                        name="abilities"
                    />
                </div>

                <div className={styles.field}>
                    <label htmlFor="desc">
                        Description <span>*</span>
                    </label>
                    <textarea placeholder="Description" required name="desc" />
                </div>

                <div className={styles.field}>
                    <label htmlFor="phrase">Catch phrase</label>
                    <input
                        type="text"
                        placeholder="With great power comes great responsibility"
                        name="phrase"
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
