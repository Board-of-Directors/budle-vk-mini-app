import style from "./InformationScreen.module.css"
import TextL from "../../shared/text/text-l/TextL";
import TextS from "../../shared/text/text-s/TextS";
import Button from "../../shared/buttons/button/Button";
import {Panel} from "@vkontakte/vkui";
import {useRouteNavigator} from "@vkontakte/vk-mini-apps-router";

const InformationScreen = ({nav, ...props}) => {

    const routeNavigator = useRouteNavigator()

    return (
        <Panel nav={nav}>
            <div className={style.wrapper}>
                <img src={props.icon} className={style.image} alt={'/'} />
                <div className={style.logoTextCol}>
                    <img src={"budle-logo.svg"} className={style.logo} alt={"/"}/>
                    <div className={style.textCol}>
                        <TextL text={props.header} />
                        <TextS text={props.caption} color={"#B6C1CE"}/>
                    </div>
                </div>
                <Button
                    text={props.buttonText}
                    onClick={() => routeNavigator.push(props.route)}
                />
            </div>
        </Panel>
    )
}

export default InformationScreen