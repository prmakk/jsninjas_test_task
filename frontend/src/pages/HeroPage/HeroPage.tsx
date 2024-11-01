import { FC, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";

import styles from "./HeroPage.module.scss";
import { useHeroStore } from "../../store/heroes.store";
import Hero from "../../components/Hero/Hero";

const HeroPage: FC = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const { fetchOneHero, oneHero, isLoading, isDeleted, setIsDeleted } =
        useHeroStore();

    useEffect(() => {
        fetchOneHero(id!);
    }, []);

    useEffect(() => {
        if (isDeleted && location.pathname !== "/") {
            setIsDeleted(false);
            toast("You will be redirected to the homepage in 3 seconds!", {
                icon: "⚠️",
            });
            setTimeout(() => {
                navigate("/");
            }, 3000);
        }
    }, [isDeleted, navigate, setIsDeleted]);

    return (
        <div className={styles.hero}>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <Hero
                    _id={oneHero?._id!}
                    nickname={oneHero?.nickname!}
                    real_name={oneHero?.real_name!}
                    origin_description={oneHero?.origin_description!}
                    superpowers={oneHero?.superpowers!}
                    catch_phrase={oneHero?.catch_phrase}
                />
            )}
        </div>
    );
};

export default HeroPage;
