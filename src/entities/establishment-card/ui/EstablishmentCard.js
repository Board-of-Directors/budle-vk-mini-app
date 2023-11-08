import style from "./EstablishmentCard.module.css"
import DescrTag from "../../../shared/tags/descr-tag/DescrTag";
import Base64Image from "../../../shared/cards/base64-image/Base64Image";
import CategoryKitchenRow from "../../../shared/rows/category-kitchen-row/CategoryKitchenRow";
import LikeButton from "../../../shared/buttons/like-button/LikeButton";

import {useState} from "react";

import MockImage from "../../../images/mock-est-image.png"
import TextM from "../../../shared/text/text-m/TextM";
import {useRouteNavigator} from "@vkontakte/vk-mini-apps-router";

export const EstablishmentCard = ({card, fullWidth = false}) => {

    const [isLiked, setIsLiked] = useState(0)
    const routeNavigator = useRouteNavigator()

    return (
        <div
            style={{width: fullWidth ? "100%" : "150px"}}
            className={style.wrapper}
            onClick={() => routeNavigator.push(`/establishment-card?id=${card.id}`)}
        >

            <img src={MockImage} className={style.image} alt={"/"}/>

            <div className={style.gradient}/>

            <div className={style.content}>

                <DescrTag descr={card.rating}/>

                <div className={style.bottomRow}>
                    <div className={style.bottomCol}>
                        <TextM text={card.name} color={"#FFFFFF"}/>
                        <CategoryKitchenRow
                            category={card.category}
                            kitchen={card.kitchen}
                        />

                    </div>
                    <LikeButton
                        isLiked={isLiked}
                        setLiked={() => setIsLiked(
                            prevState => prevState === 1 ? 0 : 1
                        )}
                    />
                </div>

            </div>

        </div>
    )
}