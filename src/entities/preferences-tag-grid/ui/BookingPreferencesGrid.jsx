import style from "./BookingPreferencesGrid.module.css"
import HeaderContentCol from "../../../shared/wrappers/header-content-col/HeaderContentCol";
import {useState} from "react";
import {FilterTag} from "../../../shared/tags/filter-tag/FilterTag";

const BookingPreferencesGrid = ({tags}) => {

    const [activeTag, setActiveTag] = useState({id: 0, name: ""})

    return (
        <HeaderContentCol header={"Предпочтения"}>
            <div className={style.wrapper}>
                {
                    tags.map((tag) => {
                        return <FilterTag
                            tag={tag}
                            icon={tag.icon}
                            activetag={activeTag}
                            setActiveTag={(tag) => setActiveTag(tag)}
                            />
                    })
                }
            </div>
        </HeaderContentCol>
    )
}

export default BookingPreferencesGrid