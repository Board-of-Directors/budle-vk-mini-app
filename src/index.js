import React from "react";
import bridge from "@vkontakte/vk-bridge";
import App from "./app/App";
import "./app/App.css"
import {AdaptivityProvider, AppRoot, ConfigProvider} from "@vkontakte/vkui";

import {createRoot} from "react-dom/client"
import {router} from "./router"
import {RouterProvider} from "@vkontakte/vk-mini-apps-router";

bridge.send("VKWebAppInit").then((data) => {
    console.log(data.result)
}).catch((error) => {
    console.log(error)
})

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

const root = createRoot(document.getElementById("root"))

root.render(
    <ConfigProvider appearance={"light"}>
        <AdaptivityProvider>
            <AppRoot>
                <RouterProvider router={router}>
                    <App/>
                </RouterProvider>
            </AppRoot>
        </AdaptivityProvider>
    </ConfigProvider>
)

if (process.env.NODE_ENV === "development") {
    import("./app/eruda").then(({default: eruda}) => {
    })
}
