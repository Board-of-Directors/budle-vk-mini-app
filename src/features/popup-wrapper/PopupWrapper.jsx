import style from "./PopupWrapper.module.css"
import TextL from "../../shared/text/text-l/TextL";
import {FiX} from "react-icons/fi";

const PopupWrapper = ({children, header, onClose}) => {
    return (
        <div className={style.popupWrapper}>
            <div className={style.layoutWrapper}>
                <div className={style.wrapper}>

                    <div className={style.headerCloseRow}>
                        <TextL text={header}/>
                        <FiX size={"20px"} onClick={() => onClose()}/>
                    </div>

                    {children}

                </div>
            </div>
        </div>
    );
};

export default PopupWrapper;
