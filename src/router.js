import {createBrowserRouter} from "@vkontakte/vk-mini-apps-router";

export const router = createBrowserRouter([
    {
        path: '/',
        panel: 'establishment_list_panel',
        view: 'main_view'
    },
    {
        path: '/establishment-card',
        panel: 'establishment_card_panel',
        view: 'main_view'
    },
    {
        path: '/establishment-card/:establishmentId/booking',
        panel: 'booking_menu_panel',
        view: 'main_view'
    },
    {
        path: '/establishment-card/:establishmentId/booking/info',
        panel: 'booking_menu_panel',
        view: 'main_view'
    }
]);