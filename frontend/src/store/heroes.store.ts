import axios from "axios";
import { toast } from "react-hot-toast";
import { create } from "zustand";
import IHero from "../types/types";

interface IStore {
    allHeroes: IHero[] | null;
    oneHero: IHero | null;
    isLoading: boolean;
    isDeleted: boolean;
    setIsDeleted: (value: boolean) => void;
    fetchAllHeroes: () => Promise<void>;
    fetchOneHero: (id: string) => Promise<void>;
    deleteHero: (id: string) => Promise<void>;
    addHero: (inputData: any) => Promise<void>;
}

export const useHeroStore = create<IStore>((set, get) => ({
    allHeroes: null,
    isLoading: false,
    isDeleted: false,
    setIsDeleted: (value) => {
        set({ isDeleted: value });
    },
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
    deleteHero: async (id) => {
        try {
            await axios.delete(`/api/v1/delete/${id}`);
            set((state) => ({
                allHeroes: state.allHeroes!.filter((hero) => hero._id !== id),
                isDeleted: true,
            }));
            toast.success("Hero deleted successfully");
        } catch (error: any) {
            toast.error(error.response.data.message || "An error occurred");
        }
    },
    addHero: async (inputData) => {
        try {
            await axios.post("/api/v1/create", inputData);
            await get().fetchAllHeroes();
            toast.success("Hero added successfully");
        } catch (error: any) {
            toast.error(error.response.data.message || "An error occurred");
        }
    },
}));
