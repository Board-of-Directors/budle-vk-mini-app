import style from "./MenuTab.module.css"
import TextS from "../../text/text-s/TextS";

const MenuTab = ({tab}) => {
    return (
        <div
            className={style.wrapper}
            onClick={() => tab.onClick()}
        >
            {tab.icon}
            <TextS text={tab.name}/>
        </div>
    );
};

export default MenuTab;
