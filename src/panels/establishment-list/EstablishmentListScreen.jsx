import style from "./EstablishmentListScreen.module.css"

import EstablishmentCardRow from "../../features/establishment-card-row/ui/EstablishmentCardRow";
import SearchBarRow from "../../entities/search-bar-row/ui/SearchBarRow";
import FilterTagRow from "../../entities/filter-tag-row/ui/FilterTagRow";
import {useEffect, useState} from "react"
import {filterTagsData} from "../../entities/filter-tag-row/model/filterTagsData";

const EstablishmentListScreen = () => {

    const [inputText, setText] = useState("")
    const [activeTag, setActive] = useState(filterTagsData[0])

    return (
        <div className={style.wrapper}>
            <SearchBarRow onChange={(text) => setText(text)}/>
            <FilterTagRow
                activeTag={activeTag}
                setActive={(tag) => setActive(tag)}
            />
            <EstablishmentCardRow
                category={"Рестораны"}
                amount={"Всего 137"}
            />
        </div>
    )
}

export default EstablishmentListScreen