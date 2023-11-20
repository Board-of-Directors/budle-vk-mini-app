import style from "./FilterButton.module.css"
import {FiSliders} from "react-icons/fi";

const FilterButton = ({onClick}) => {
    return (
        <div
            className={style.button}
            onClick={() => onClick()}
        >
            <FiSliders size={"18px"} />
        </div>
    );
};

export default FilterButton;
