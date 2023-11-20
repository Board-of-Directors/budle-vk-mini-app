import style from "./EstablishmentCardDescr.module.css"
import {EstablishmentCard} from "../../entities/establishment-card/ui/EstablishmentCard";
import {useRouteNavigator} from "@vkontakte/vk-mini-apps-router";
import EstablishmentDescrCol from "../../entities/establishment-descr-col/EstablishmentDescrCol";

const EstablishmentCardDescr = ({card}) => {

    const routeNavigator = useRouteNavigator()

    return (
        <div className={style.wrapper}>
            <EstablishmentCard
                card={card}
                onClick={
                    () => routeNavigator.push(
                        `/establishment-card?id=${card.id}`
                    )
                }
            />
            <EstablishmentDescrCol card={card}/>
        </div>
    );
};

export default EstablishmentCardDescr;
