import HeaderContentCol from "../../../shared/wrappers/header-content-col/HeaderContentCol";
import {truncateDescription} from "../lib/TruncateDescription";
import {useState} from "react";
import TextM from "../../../shared/text/text-m/TextM";

const EstablishmentDescription = (props) => {

    const [isExpanded, setExpanded] = useState(false)

    return (
        <HeaderContentCol header={"Описание"}>
            {!isExpanded ? truncateDescription(props.description) : props.description}
            <div onClick={() => setExpanded(!isExpanded)}>
                <TextM text={"Ещё"} color={"#654DF6"}/>
            </div>
        </HeaderContentCol>
    )
}

export default EstablishmentDescription