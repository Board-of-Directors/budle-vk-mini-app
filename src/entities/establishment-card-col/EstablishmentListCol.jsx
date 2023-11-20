import style from "./EstablishmentListCol.module.css"
import {useStore} from "../../store/Store";
import {useShallow} from "zustand/react/shallow";
import {useEffect} from "react";
import {EstablishmentCard} from "../establishment-card/ui/EstablishmentCard";
import TextXL from "../../shared/text/text-xl/TextXL";
import {useQuery} from "react-query";

const EstablishmentListCol = () => {

    const [establishmentList, getEstablishmentList] = useStore(
        useShallow(state => [state.establishments, state.getAllEstablishments])
    )

    const establishmentsQuery = useQuery({
        queryKey : ["establishmentAll"],
        queryFn : getEstablishmentList,
        refetchInterval : 1000 * 60 * 5,
    })

    if (establishmentsQuery.status === "loading") {
        return <div>
            Loading..
        </div>
    }

    if (establishmentsQuery.status === "success") {
        return (
            <div className={style.wrapper}>
                <TextXL text={`Мы нашли ${establishmentList.length} мест`} />
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

}

export default EstablishmentListCol