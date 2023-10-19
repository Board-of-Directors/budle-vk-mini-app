import {create} from "zustand"
import {establishmentCardInfoSlice} from "./slices/EstablishmentCardInfoSlice";
import {establishmentBookingMenuSlice} from "./slices/EstablishmentBookingMenuSlice";
import {establishmentListSlice} from "./slices/EstablishmentListSlice";

export const useStore = create((set, get) => ({
    ...establishmentCardInfoSlice(set),
    ...establishmentBookingMenuSlice(set, get),
    ...establishmentListSlice(set)
}))