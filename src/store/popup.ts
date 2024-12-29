import { create } from 'zustand';

type State = {
  namePopup: string;
  isOpen: boolean;
};

type Actions = {
  addNamePopup: (namePage: string) => void;
  isOpenHandler: (isOpen: boolean) => void;
};

export const usePopup = create<State & Actions>((set) => ({
    namePopup: '',
    isOpen: false,

    addNamePopup: (namePopup: string) => {
        try {
            set({ namePopup });
        } catch (error) {
            console.error(error);
        }
    },

    isOpenHandler: (isOpen: boolean) => {
        try {
            set({ isOpen });
        } catch (error) {
            console.error(error);
        }
    }
}));
