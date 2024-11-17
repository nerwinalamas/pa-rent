import { Property } from "@/sanity.types";
import { create } from "zustand";

export type ModalType = "createListing";

type ModalStore = {
    type: ModalType | null;
    data?: Property | string;
    isOpen: boolean;
    onOpen: (type: ModalType, data?: Property | string) => void;
    onClose: () => void;
};

export const useListingModal = create<ModalStore>((set) => ({
    type: null,
    data: undefined,
    isOpen: false,
    onOpen: (type, data) => set({ isOpen: true, type, data }),
    onClose: () => set({ type: null, data: undefined, isOpen: false }),
}));
