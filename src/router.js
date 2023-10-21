import {createBrowserRouter} from "@vkontakte/vk-mini-apps-router";

export const router = createBrowserRouter([
    {
        path: '/',
        panel: 'start_panel',
        view: 'main_view'
    },
    {
        path: '/authorization-screen/:type',
        panel: 'authorization_panel',
        view: 'main_view'
    },
    {
        path: '/authorization-screen/success',
        panel: 'information_panel',
        view: 'main_view'
    },
    {
        path: '/establishment-list',
        panel: 'establishment_list_panel',
        view: 'main_view'
    },
    {
        path: '/establishment-search',
        panel: 'establishment_search_panel',
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
        panel: 'info_panel',
        view: 'main_view'
    }
]);