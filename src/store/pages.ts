import { create } from 'zustand';

type State = {
  namePage: string;
};

type Actions = {
  addNamePage: (namePage: string) => void;
};

export const usePages = create<State & Actions>((set) => ({
  namePage: 'Categories',

  addNamePage: (namePage: string) => {
    try {
      set({ namePage });
    } catch (error) {
      console.error(error);
    }
  },
}));
