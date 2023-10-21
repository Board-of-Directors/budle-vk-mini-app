import style from "./EstablishmentSearchScreen.module.css"

import SearchBarRow from "../../entities/search-bar-row/ui/SearchBarRow";
import HeaderContentCol from "../../shared/wrappers/header-content-col/HeaderContentCol";
import {useStore} from "../../store/Store";
import EstablishmentCardDescr from "../../features/establishment-card-descr/EstablishmentCardDescr";
import {useEffect, useState} from "react";
import {Panel} from "@vkontakte/vkui";

const EstablishmentSearchScreen = ({nav}) => {

    const [typedName, setTypedName] = useState("")

    const searchEstablishments = useStore(state => state.searchEstablishments)
    const filterEstablishments = useStore(state => state.filterEstablishments)

    const length = searchEstablishments.length

    useEffect(() => {
        filterEstablishments(typedName)
    }, [typedName])

    return (
        <Panel nav={nav}>
            <div className={style.wrapper}>
                <SearchBarRow isExpanded={true} onChange={(name) => setTypedName(name)}/>
                <HeaderContentCol header={"Рестораны"} subheader={`Найдено ${length}`}>
                    <div className={style.cards}>
                        {
                            searchEstablishments.map((establishment) => {
                                return <EstablishmentCardDescr card={establishment} />
                            })
                        }
                    </div>
                </HeaderContentCol>
            </div>
        </Panel>
    )

}

export default EstablishmentSearchScreen;
