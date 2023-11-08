import style from "./EstablishmentListCol.module.css"
import {useStore} from "../../store/Store";
import {useShallow} from "zustand/react/shallow";
import {useEffect} from "react";
import {EstablishmentCard} from "../establishment-card/ui/EstablishmentCard";
import TextXL from "../../shared/text/text-xl/TextXL";

const EstablishmentListCol = () => {

    const [establishmentList, getEstablishmentList] = useStore(
        useShallow(state => [state.establishments, state.getAllEstablishments])
    )

    const establishmentListSize = establishmentList.length

    useEffect(() => {
        getEstablishmentList()
            .then((response) => console.log(response))
            .catch((error) => console.log(error))
    }, [])

    return (
        <div className={style.wrapper}>
            <TextXL text={`Мы нашли ${establishmentListSize} мест`} />
            {
                establishmentList.map((establishment) => {
                    return <EstablishmentCard
                        card={establishment}
                        fullWidth={true}
                    />
                })
            }
        </div>
    )
}

export default EstablishmentListCol