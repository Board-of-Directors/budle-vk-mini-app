import '@vkontakte/vkui/dist/vkui.css';
import {useActiveVkuiLocation, useGetPanelForView} from "@vkontakte/vk-mini-apps-router";
import {Root, View} from "@vkontakte/vkui";
import EstablishmentListScreen from "../panels/establishment-list/ui/EstablishmentListScreen";
import EstablishmentCardScreen from "../panels/establishment-card/ui/EstablishmentCardScreen";
import BookingMenuScreen from "../panels/booking-menu/ui/BookingMenuScreen";
import StartScreen from "../panels/authorisation/start-screen/StartScreen";
import AuthorizationScreen from "../panels/authorisation/authorization-screen/AuthorizationScreen";
import InformationScreen from "../panels/information-screen/InformationScreen";
import EstablishmentSearchScreen from "../panels/establishment-search/EstablishmentSearchScreen";

const App = () => {

    const {view: activeView} = useActiveVkuiLocation();
    const activePanel = useGetPanelForView('main_view');

    return (
        <Root activeView={activeView}>
            <View nav={'main_view'} activePanel={activePanel}>

                <StartScreen nav={"start_panel"}/>
                <AuthorizationScreen nav={"authorization_panel"}/>

                <EstablishmentListScreen nav={'establishment_list_panel'}/>
                <EstablishmentSearchScreen nav={'establishment_search_panel'} />
                <EstablishmentCardScreen nav={'establishment_card_panel'}/>

                <BookingMenuScreen nav={'booking_menu_panel'}/>

                <InformationScreen
                    nav={'information_panel'}
                    icon={"success-rocket.png"}
                    header={`Регистрация прошла успешно!
                        Приступаем к бронированию`}
                    buttonText={"Завершить регистрацию"}
                    route={"/establishment-list"}
                />

            </View>
        </Root>
    )

}

export default App
