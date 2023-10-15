import React from "react";
import ReactDOM from "react-dom";
import bridge from "@vkontakte/vk-bridge";
import App from "./app/App";
import "./app/App.css"

bridge.send("VKWebAppInit").then((data) => {
    console.log(data.result)
}).catch((error) => {
    console.log(error)
})

ReactDOM.render(<App/>, document.getElementById("root"));

if (process.env.NODE_ENV === "development") {
    import("./app/eruda").then(({default: eruda}) => {
    })
}
