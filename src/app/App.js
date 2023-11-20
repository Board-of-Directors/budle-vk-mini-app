import '@vkontakte/vkui/dist/vkui.css';
import {useActiveVkuiLocation, useGetPanelForView} from "@vkontakte/vk-mini-apps-router";
import {Root, View} from "@vkontakte/vkui";
import EstablishmentListScreen from "../panels/establishment-list/ui/EstablishmentListScreen";
import EstablishmentCardScreen from "../panels/establishment-card/ui/EstablishmentCardScreen";
import BookingMenuScreen from "../panels/booking-menu/ui/BookingMenuScreen";
import StartScreen from "../panels/authorisation/start-screen/StartScreen";
import AuthorizationScreen from "../panels/authorisation/authorization-screen/AuthorizationScreen";
import EstablishmentSearchScreen from "../panels/establishment-search/EstablishmentSearchScreen";
import UserProfileMenuScreen from "../panels/user-menu/user-profile-menu/UserProfileMenuScreen";
import UserOrdersScreen from "../panels/user-menu/user-orders/UserOrdersScreen";
import UserSettingsScreen from "../panels/user-menu/user-settings/UserSettingsScreen";
import UserNotificationsScreen from "../panels/user-menu/user-notifications/UserNotificationsScreen";
import UserFavoritesScreen from "../panels/user-menu/user-favorites/UserFavoritesScreen";

const App = () => {

    const {view: activeView} = useActiveVkuiLocation();
    const activePanel = useGetPanelForView('main_view');

    return (
        <Root activeView={activeView}>
            <View nav={'main_view'} activePanel={activePanel}>

                <StartScreen nav={"start_panel"}/>
                <AuthorizationScreen nav={"authorization_panel"}/>

                <EstablishmentListScreen nav={'establishment_list_panel'}/>
                <EstablishmentSearchScreen nav={'establishment_search_panel'}/>
                <EstablishmentCardScreen nav={'establishment_card_panel'}/>

                <BookingMenuScreen nav={'booking_menu_panel'}/>

                <UserProfileMenuScreen nav={'user_menu_panel'}/>
                <UserFavoritesScreen nav={'user_menu_favorites_panel'} />
                <UserOrdersScreen nav={'user_menu_orders_panel'}/>
                <UserSettingsScreen nav={'user_menu_settings_panel'}/>
                <UserNotificationsScreen nav={'user_menu_notifications_panel'} />

            </View>
        </Root>
    )

}

export default App
