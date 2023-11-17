import React from "react";
import bridge from "@vkontakte/vk-bridge";
import App from "./app/App";
import "./app/App.css"
import {AdaptivityProvider, AppRoot, ConfigProvider} from "@vkontakte/vkui";

import {createRoot} from "react-dom/client"
import {router} from "./router"
import {RouterProvider} from "@vkontakte/vk-mini-apps-router";
import {QueryClient, QueryClientProvider} from "react-query";

if (localStorage.getItem("notificationAllowed") === null) {
    bridge.send('VKWebAppAllowNotifications')
        .then((data) => {
            if (data.result) {
                localStorage.setItem("notificationAllowed", "true")
                console.log("Пользователь разрешил уведомления")
            } else console.log("Пользователь не разрешил уведомления")
        })
        .catch((error) => console.log(error))
}

bridge.send("VKWebAppInit").then((data) => {
    console.log(data.result)
}).catch((error) => {
    console.log(error)
})

const root = createRoot(document.getElementById("root"))
const queryClient = new QueryClient();

root.render(
    <QueryClientProvider client={queryClient}>
        <ConfigProvider appearance={"light"}>
            <AdaptivityProvider>
                <AppRoot>
                    <RouterProvider router={router}>
                        <App/>
                    </RouterProvider>
                </AppRoot>
            </AdaptivityProvider>
        </ConfigProvider>
    </QueryClientProvider>
)

if (process.env.NODE_ENV === "development") {
    import("./app/eruda").then(({default: eruda}) => {
    })
}
