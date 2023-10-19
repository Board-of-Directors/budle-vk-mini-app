import style from "./EstablishmentListScreen.module.css"

import EstablishmentCardRow from "../../../features/establishment-card-row/ui/EstablishmentCardRow";
import SearchBarRow from "../../../entities/search-bar-row/ui/SearchBarRow";
import FilterTagRow from "../../../entities/filter-tag-row/ui/FilterTagRow";
import {useEffect, useState} from "react"
import {filterTagsData} from "../../../entities/filter-tag-row/model/filterTagsData";
import {Panel} from "@vkontakte/vkui";
import {useShallow} from "zustand/react/shallow";
import {useStore} from "../../../store/Store";

const EstablishmentListScreen = (props) => {

    const [inputText, setText] = useState("")
    const [activeTag, setActive] = useState(filterTagsData[0])

    const [establishments, getAllEstablishments] = useStore(
        useShallow((state) => [state.establishments, state.getAllEstablishments])
    )

    useEffect(() => {
        getAllEstablishments()
    }, [establishments])

    useEffect(() => {
        console.log(establishments)
    }, [establishments])

    return (
        <Panel nav={props.nav}>
            <div className={style.wrapper}>
                <SearchBarRow onChange={(text) => setText(text)}/>
                <FilterTagRow
                    activeTag={activeTag}
                    setActive={(tag) => setActive(tag)}
                />
                <EstablishmentCardRow
                    establishments={establishments}
                    category={"Рестораны"}
                    amount={`Всего ${establishments.length}`}
                />
            </div>
        </Panel>
    )
}

export default EstablishmentListScreen