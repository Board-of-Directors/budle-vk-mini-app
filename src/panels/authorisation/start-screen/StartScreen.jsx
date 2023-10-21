import style from "./StartScreen.module.css"
import Button from "../../../shared/buttons/button/Button";
import {useRouteNavigator} from "@vkontakte/vk-mini-apps-router";
import TextS from "../../../shared/text/text-s/TextS";
import {Panel} from "@vkontakte/vkui";
import TextL from "../../../shared/text/text-l/TextL";
import CenterContentScreen from "../../../shared/wrappers/center-content-screen/CenterContentScreen";

const StartScreen = ({nav}) => {

    const routeNavigator = useRouteNavigator()

    return (
        <Panel nav={nav}>
            <CenterContentScreen>
                <img src={"start-icon.png"} className={style.startIcon} alt={'/'} />

                <div className={style.logoTextCol}>
                    <img src={"budle-logo.svg"} className={style.logoIcon} alt={'/'} />
                    <div className={style.caption}>
                        <TextL text={"Бронируйте места в пару кликов!"} />
                    </div>
                </div>

                <div className={style.buttonCol}>

                    <Button text={"Зарегистрироваться"} onClick={
                        () => routeNavigator.push("/authorization-screen/sign-in")
                    }/>

                    <div className={style.textRow}>
                        <TextS text={"Уже есть аккаунт?"} color={"#B6C1CE"}/>
                        <div onClick={() => routeNavigator.push("/authorization-screen/log-in")}>
                            <TextS text={"Войти"} color={"#4E16C5"}/>
                        </div>
                    </div>

                </div>
            </CenterContentScreen>
        </Panel>
    )
}

export default StartScreen