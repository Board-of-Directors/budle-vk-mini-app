import {create} from "zustand"
import {establishmentCardInfoSlice} from "./slices/EstablishmentCardInfoSlice";
import {establishmentBookingMenuSlice} from "./slices/EstablishmentBookingMenuSlice";
import {establishmentListSlice} from "./slices/EstablishmentListSlice";
import {authorisationSlice} from "./slices/AuthorisationSlice";
import {userBookingSlice} from "./slices/userBookingSlice";
import {favoritesSlice} from "./slices/FavoritesSlice";
import {notificationSlice} from "./slices/NotificationSlice";
import {persist} from "zustand/middleware";

export const useStore = create((set, get) => ({
    ...establishmentCardInfoSlice(set),
    ...establishmentBookingMenuSlice(set, get),
    ...userBookingSlice(set, get),
    ...establishmentListSlice(set, get),
    ...authorisationSlice(set, get),
    ...favoritesSlice(set, get),
    ...notificationSlice(set, get)
}))