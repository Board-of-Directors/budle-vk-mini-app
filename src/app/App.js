import React, {useState, useEffect} from 'react';
import bridge from '@vkontakte/vk-bridge';
import {AdaptivityProvider, AppRoot, ConfigProvider} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import EstablishmentListScreen from "../panels/establishment-list/EstablishmentListScreen";
import {Routes} from "../enum/Routes";

const App = () => {

    const [activePanel, setActivePanel] = useState(Routes.ESTABLISHMENT_LIST);
    const [fetchedUser, setUser] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const user = await bridge.send('VKWebAppGetUserInfo');
            setUser(user);
        }

        fetchData();
    }, []);

    const go = e => {
        setActivePanel(e.currentTarget.dataset.to);
    };

    return (
        <ConfigProvider appearance={"light"}>
            <AdaptivityProvider>
                <AppRoot>
                    <EstablishmentListScreen/>
                </AppRoot>
            </AdaptivityProvider>
        </ConfigProvider>
    );
}

export default App
