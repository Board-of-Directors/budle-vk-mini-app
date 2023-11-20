import style from "./AddressRow.module.css"
import HeaderContentCol from "../../wrappers/header-content-col/HeaderContentCol";
import TextM from "../../text/text-m/TextM";
import TagButton from "../../buttons/tag-button/TagButton";
import {FiMap} from "react-icons/fi";

const AddressRow = (props) => {
    return (
        <HeaderContentCol header={"Адрес"}>
            <div className={style.row}>
                <div className={style.leftCol}> 
                    <TextM text={props.subway}/>
                    <TextM text={props.address}/>
                </div>
                <TagButton
                    text={"Карта"}
                    icon={
                        <FiMap
                            size={"18px"}
                            color={"#654DF6"}
                        />
                    }
                    onClick={() => {}}
                    />
            </div>
        </HeaderContentCol>
    )
}

export default AddressRow