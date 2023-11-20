import style from "./OnboardingButtonScreen.module.css"
import {FiArrowLeft} from "react-icons/fi";
import {useRouteNavigator} from "@vkontakte/vk-mini-apps-router";
import Button from "../../buttons/button/Button";

import BudleLogo from "../../../images/budle-logo.svg"

const OnboardingButtonScreen = (props) => {

    const routeNavigator = useRouteNavigator()

    return (
        <div className={style.wrapper}>

            <div className={style.topRow}>
                <FiArrowLeft
                    size={"20px"}
                    className={style.icon}
                    onClick={() => routeNavigator.back()}
                />
                <img src={BudleLogo} className={style.logo} alt={"/"}/>
            </div>

            <div className={style.content}>
                {props.children}
            </div>

            <div className={style.button}>
                <Button
                    text={props.buttonText}
                    onClick={() => props.onClick()}
                />
            </div>

        </div>
    )
}

export default OnboardingButtonScreen