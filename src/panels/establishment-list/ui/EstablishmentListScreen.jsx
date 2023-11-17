import style from "./EstablishmentListScreen.module.css"

import EstablishmentCardRow from "../../../features/establishment-card-row/ui/EstablishmentCardRow";
import SearchBarRow from "../../../entities/search-bar-row/ui/SearchBarRow";
import FilterTagRow from "../../../entities/filter-tag-row/ui/FilterTagRow";
import {useEffect, useState} from "react"
import {filterTagsData} from "../../../entities/filter-tag-row/model/filterTagsData";
import {Panel} from "@vkontakte/vkui";
import {useShallow} from "zustand/react/shallow";
import {useStore} from "../../../store/Store";
import EstablishmentListCol from "../../../entities/establishment-card-col/EstablishmentListCol";
import FilterButton from "../../../shared/buttons/filter-button/FilterButton";
import NotificationCard from "../../../entities/notification-card/NotificationCard";
import {MockNotification} from "../../../mock-data/MockNotification";
import {useSSE} from "../../../api/sse";
import NotificationPopup from "../../../features/notification-popup/NotificationPopup";

const EstablishmentListScreen = (props) => {

    const [inputText, setText] = useState("")
    const [activeTag, setActive] = useState(filterTagsData[0])

    const [isFilterPopupVisible, setFilterPopupVisible] = useState(false)
    const [isNotificationPopupVisible, setNotificationPopupVisible] = useState(false)

    useEffect(() => {
        useSSE()
    }, [])

    return (
        <>
            {
                isNotificationPopupVisible &&
                <NotificationPopup
                    notification={MockNotification}
                    onClose={() => setNotificationPopupVisible(false)}
                />
            }
            <div className={style.wrapper}>
                <SearchBarRow onChange={(text) => setText(text)}/>
                <div className={style.filterRow}>
                    <FilterButton onClick={() => setFilterPopupVisible(true)}/>
                    <FilterTagRow
                        tagList={filterTagsData}
                        activeTag={activeTag}
                        setActive={(tag) => setActive(tag)}
                    />
                </div>
                <EstablishmentListCol/>
            </div>
        </>
    )

}

export default EstablishmentListScreen