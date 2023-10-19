import '@vkontakte/vkui/dist/vkui.css';
import {useActiveVkuiLocation, useGetPanelForView} from "@vkontakte/vk-mini-apps-router";
import {Root, View} from "@vkontakte/vkui";
import EstablishmentListScreen from "../panels/establishment-list/ui/EstablishmentListScreen";
import EstablishmentCardScreen from "../panels/establishment-card/ui/EstablishmentCardScreen";
import BookingMenuPopup from "../panels/booking-menu/ui/BookingMenuPopup";

const App = () => {

    const { view: activeView } = useActiveVkuiLocation();
    const activePanel = useGetPanelForView('main_view');

    return (

        <Root activeView={activeView}>
            <View nav={'main_view'} activePanel={activePanel}>
                <EstablishmentListScreen nav={'establishment_list_panel'} />
                <EstablishmentCardScreen nav={'establishment_card_panel'} />
            </View>
        </Root>

    );

}

export default App
