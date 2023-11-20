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
        path: '/establishment-list',
        panel: 'establishment_list_panel',
        view: 'main_view'
    },

    {
        path: '/user-menu',
        panel: 'user_menu_panel',
        view: 'main_view'
    },
    {
        path: '/user-menu/orders',
        panel: 'user_menu_orders_panel',
        view: 'main_view'
    },
    {
        path: '/user-menu/settings',
        panel: 'user_menu_settings_panel',
        view: 'main_view'
    },

    {
        path: '/user-menu/notifications',
        panel: 'user_menu_notifications_panel',
        view: 'main_view'
    },

    {
        path: '/user-menu/favorites',
        panel: 'user_menu_favorites_panel',
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
    }
]);