import axios from "axios";
import { toast } from "react-hot-toast";
import { create } from "zustand";
import IHero from "../types/types";

interface IStore {
    allHeroes: IHero[] | null;
    oneHero: IHero | null;
    isLoading: boolean;
    fetchAllHeroes: () => Promise<void>;
    fetchOneHero: (id: string) => Promise<void>;
}

export const useHeroStore = create<IStore>((set) => ({
    allHeroes: null,
    isLoading: false,
    oneHero: null,
    fetchAllHeroes: async () => {
        set({ isLoading: true });

        try {
            const response = await axios.get("/api/v1/heroes");
            set({ allHeroes: response.data.heroes, isLoading: false });
        } catch (error: any) {
            toast.error(error.response.data.message || "An error occurred");
            set({ isLoading: false, allHeroes: null });
        }
    },
    fetchOneHero: async (id) => {
        try {
            set({ isLoading: true });

            const response = await axios.get(`/api/v1/heroes/${id}`);
            set({ oneHero: response.data.hero, isLoading: false });
            toast.success("Your hero is ready!");
        } catch (error: any) {
            toast.error(error.response.data.message || "An error occurred");
            set({ isLoading: false, oneHero: null });
        }
    },
}));
