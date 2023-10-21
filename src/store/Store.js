import {create} from "zustand"
import {establishmentCardInfoSlice} from "./slices/EstablishmentCardInfoSlice";
import {establishmentBookingMenuSlice} from "./slices/EstablishmentBookingMenuSlice";
import {establishmentListSlice} from "./slices/EstablishmentListSlice";
import {authorisationSlice} from "./slices/AuthorisationSlice";

export const useStore = create((set, get) => ({
    ...establishmentCardInfoSlice(set),
    ...establishmentBookingMenuSlice(set, get),
    ...establishmentListSlice(set, get),
    ...authorisationSlice(set, get)
}))