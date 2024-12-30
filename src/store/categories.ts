import { create } from 'zustand';
import { IBaseCategory, ICategory } from '../models/ICategory';
import axios from "axios";

type State = {
  categories: ICategory[],
  category: ICategory | null
  message: string,
  error: string
  isDownloaded: boolean,
  isError: boolean
}

type Actions = {
  getCategories: () => Promise<void>;
  getCategoryById: (id: number) => Promise<void>;
  addCategory: (category: IBaseCategory ) => Promise<void>;
  updateCategory: (category: ICategory ) => Promise<void>;
  removeCategory: (id: number) => Promise<void>;
}

const fetchCategories = async (set: (state: Partial<State>) => void) => {
  try {
    const response = await axios.get(
      "https://marusina-sweets.onrender.com/categories/"
      //`http://127.0.0.1:8000/categories/`
    );
    if (response.status === 200) {
      set({ categories: response.data, isDownloaded: true, isError: false });
    } else {
      set({ categories: [], isDownloaded: true, isError: true });
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(error.response?.data);
      set({
        error: error.response?.data || "An error occurred",
        isDownloaded: true,
        isError: true,
      });
    } else {
      console.error("Unexpected error:", error);
      set({
        error: "An unexpected error occurred",
        isDownloaded: true,
        isError: true,
      });
    }
  }
};

export const useCategories = create<State & Actions>((set)=> ({
    categories: [],
    category: null,
    message: '',
    error: '',
    isDownloaded: false,
    isError: false,

    getCategories: async () => {
      set({ isDownloaded: false, isError: false });
      await fetchCategories(set);
    },

    getCategoryById: async (id: number) => {
      try {
        set({ isDownloaded: false, isError: false });
        const response = await axios.get(
          `https://marusina-sweets.onrender.com/categories/${id}`,  
          //`http://127.0.0.1:8000/categories/${id}`,
        );
        if (response.status === 200) {
          set({ category: response.data, isDownloaded: true });
        } else {
          set({ category: null });
        }
        await fetchCategories(set);
      } catch (error) {
        console.error(error);
      }
    },

    addCategory: async (category: IBaseCategory) => {
      try {
        set({ isDownloaded: false, isError: false });
        const responseAdd = await axios.post(
          "https://marusina-sweets.onrender.com/categories/",
          //"http://127.0.0.1:8000/categories/",
          category
        );
        if (responseAdd.status === 200) {
          console.log(responseAdd.data.message)
          set({ message: responseAdd.data.message })
        };
        await fetchCategories(set);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.error(error.response?.data);
          set({ error: error.response?.data });
        } else {
          console.error("Unexpected error:", error);
          set({ error: "An unexpected error occurred", isDownloaded: true });
        }
      }
    },

    updateCategory: async (category: ICategory) => {
      try {
        set({ isDownloaded: false, isError: false });
        const { id } = category;
        const responseUpdate = await axios.put(
          `https://marusina-sweets.onrender.com/categories/${id}`,
          //`http://127.0.0.1:8000/categories/${id}`,
          category
        );
        if (responseUpdate.status === 200) {
          set({ message: responseUpdate.data.message })
        };
        await fetchCategories(set);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.error(error.response?.data.detail);
          set({ error: error.response?.data, isDownloaded: true });
        } else {
          console.error("Unexpected error:", error);
          set({ error: "An unexpected error occurred", isDownloaded: true });
        }
      }
    },

    removeCategory: async (id: number) => {
      try {
        set({ isDownloaded: false, isError: false });
        const responseDel = await axios.delete(
          `https://marusina-sweets.onrender.com/categories/${id}`,
          //`http://127.0.0.1:8000/categories/${id}`,
        );
        if (responseDel.status === 200) {
          console.log(responseDel.data.message)
          set({ message: responseDel.data.message })
        } else {
          console.log(responseDel.data.message);
          set({ error: responseDel.data.message })
        };
        await fetchCategories(set);
      } catch (error) {
        console.error(error);
        set({ isDownloaded: true });
      }
    }
}))
