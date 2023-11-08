import style from "./InformationScreen.module.css"
import Button from "../../shared/buttons/button/Button";

import BudeLogo from "../../images/budle-logo.svg"
import TextM from "../../shared/text/text-m/TextM";
import TextXL from "../../shared/text/text-xl/TextXL";

const InformationScreen = (props) => {
    return (
        <div className={style.wrapper}>
            <img src={props.icon} className={style.image} alt={'/'} />
            <div className={style.logoTextCol}>
                <img src={BudeLogo} className={style.logo} alt={"/"}/>
                <div className={style.textCol}>
                    <TextXL text={props.header} />
                    <div className={style.caption}>
                        <TextM text={props.caption} color={"#B6C1CE"}/>
                    </div>
                </div>
            </div>
            <Button
                text={props.buttonText}
                onClick={() => props.onClick()}
            />
        </div>
    )
}

export default InformationScreen