import style from "./HeaderCloseRow.module.css"
import TextM from "../../text/text-m/TextM";
import {FiX} from "react-icons/fi";
import {useRouteNavigator} from "@vkontakte/vk-mini-apps-router";

const HeaderCloseRow = ({header}) => {

    const routeNavigator = useRouteNavigator()

    return (
        <div className={style.wrapper}>
            <TextM text={header}/>
            <FiX
                size={"20px"}
                className={style.icon}
                onClick={() => routeNavigator.back()}
            />
        </div>
    );
};

export default HeaderCloseRow;
