import { FC } from "react";

import styles from "./PaginationList.module.scss";

interface IPagination {
    totalPages: number;
    setCurrentPage: (page: number) => void;
    currentPage: number;
}

const PaginationList: FC<IPagination> = ({
    totalPages,
    setCurrentPage,
    currentPage,
}) => {
    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <div className={styles.pagination}>
            {Array.from({ length: totalPages }, (_, index) => (
                <button
                    className={
                        currentPage === index + 1
                            ? styles.active
                            : styles.button
                    }
                    key={index}
                    onClick={() => handlePageChange(index + 1)}
                >
                    {index + 1}
                </button>
            ))}
        </div>
    );
};

export default PaginationList;
