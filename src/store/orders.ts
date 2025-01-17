import { create } from 'zustand';
import { IBaseOrder, IOrder } from '../models/IOrder';
import axios from "axios";
import { URL } from '../http/url';

type State = {
  orders: IOrder[],
  order: IOrder | null
  message: string,
  error: string
  isDownloaded: boolean,
  isError: boolean
}

type Actions = {
  getOrders: () => Promise<void>;
  clearNotifications: () => Promise<void>;
  getOrderById: (id: number) => Promise<void>;
  addOrder: (category: IBaseOrder ) => Promise<void>;
  updateOrder: (category: IOrder ) => Promise<void>;
  removeOrder: (id: number) => Promise<void>;
}

const { urlOnrenderOrders } = URL;

const fetchOrders = async (set: (state: Partial<State>) => void) => {
  try {
    const response = await axios.get(
      urlOnrenderOrders
      //"https://marusina-sweets.onrender.com/categories/"
      //`http://127.0.0.1:8000/categories/`
    );
    if (response.status === 200) {
      set({ orders: response.data, isDownloaded: true, isError: false });
    } else {
      set({ orders: [], isDownloaded: true, isError: true });
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      set({
        error: error.response?.data || "Произошла непредвиденная ошибка",
        isDownloaded: true,
        isError: true,
      });
    } else {
      set({
        error: "Произошла непредвиденная ошибка",
        isDownloaded: true,
        isError: true,
      });
    }
  }
};

export const useOrders = create<State & Actions>((set)=> ({
  orders: [],
  order: null,
  message: '',
  error: '',
  isDownloaded: false,
  isError: false,

  getOrders: async () => {
    set({ isDownloaded: false, isError: false });
    await fetchOrders(set);
  },

  getOrderById: async (id: number) => {
    try {
      set({ isDownloaded: false, isError: false });
      const response = await axios.get(
        urlOnrenderOrders + id,
          //`https://marusina-sweets.onrender.com/categories/${id}`,
          //`http://127.0.0.1:8000/categories/${id}`,
      );
      if (response.status === 200) {
        set({ order: response.data, isDownloaded: true });
      } else {
        set({ order: null });
      }
      await fetchOrders(set);
    } catch (error) {
      console.error(error);
      set({
        error: "Произошла непредвиденная ошибка",
        isDownloaded: true,
        isError: true,
      });
    }
  },

  addOrder: async (order: IBaseOrder) => {
    try {
      set({ isDownloaded: false, isError: false });
      const responseAdd = await axios.post(
        urlOnrenderOrders,
        //"https://marusina-sweets.onrender.com/categories/",
        //"http://127.0.0.1:8000/categories/",
        order
      );
      if (responseAdd.status === 201) {
        set({ message: responseAdd.data.message })
      };
      await fetchOrders(set);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        set({ error: error.response?.data });
      } else {
        console.error("Непредвиденная ошибка:", error);
        set({
          error: "Непредвиденная ошибка",
          isDownloaded: true,
          isError: true,
        });
      }
    }
  },

  updateOrder: async (order: IOrder) => {
    try {
      set({ isDownloaded: false, isError: false });
      const { id } = order;
      const responseUpdate = await axios.put(
        urlOnrenderOrders + id,
        //`https://marusina-sweets.onrender.com/categories/${id}`,
        //`http://127.0.0.1:8000/categories/${id}`,
        order
      );
      if (responseUpdate.status === 200) {
        set({ message: responseUpdate.data.message })
      };
      await fetchOrders(set);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error(error.response?.data);
        set({ error: error.response?.data, isDownloaded: true });
      } else {
        console.error("Произошла непредвиденная ошибка:", error);
        set({
          error: "Произошла непредвиденная ошибка",
          isDownloaded: true,
          isError: true,
        });
      }
    }
  },

  removeOrder: async (id: number) => {
    try {
      set({ isDownloaded: false, isError: false });
      const responseDel = await axios.delete(
        urlOnrenderOrders + id,
        //`https://marusina-sweets.onrender.com/categories/${id}`,
        //`http://127.0.0.1:8000/categories/${id}`,
      );
      if (responseDel.status === 200) {
        set({ message: responseDel.data.message })
      } else {
        set({ error: responseDel.data.message })
      };
      await fetchOrders(set);
    } catch (error) {
      console.error(error);
      set({
        error: "Произошла непредвиденная ошибка",
        isDownloaded: true,
        isError: true,
      });
    }
  },

  clearNotifications: async () => set({ message: '', error: '' }),
}))
