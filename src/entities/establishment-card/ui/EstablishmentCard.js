import style from "./EstablishmentCard.module.css"
import DescrTag from "../../../shared/tags/descr-tag/DescrTag";
import Base64Image from "../../../shared/cards/base64-image/Base64Image";
import CategoryKitchenRow from "../../../shared/rows/category-kitchen-row/CategoryKitchenRow";
import LikeButton from "../../../shared/buttons/like-button/LikeButton";

import {useState} from "react";

import MockImage from "../../../images/mock-est-image.png"
import TextM from "../../../shared/text/text-m/TextM";
import {useRouteNavigator} from "@vkontakte/vk-mini-apps-router";
import {useShallow} from "zustand/react/shallow";
import {useStore} from "../../../store/Store";

export const EstablishmentCard = ({card, fullWidth = false}) => {

    const [isLiked, setIsLiked] = useState(0)
    const routeNavigator = useRouteNavigator()

    const [addToFavorites, removeFromFavorites] = useStore(
        useShallow(state => [state.addToFavorites, state.removeFromFavorites])
    )

    const handleLike = () => {
        if (isLiked === 0) addToFavorites(card.id)
        else removeFromFavorites(card.id)
        setIsLiked(prevState => prevState === 0 ? 1 : 0)
    }

    return (
        <div
            style={{width: fullWidth ? "100%" : "150px"}}
            className={style.wrapper}
        >

            <Base64Image
                data={card.image}
                className={style.image}
            />

            <div className={style.gradient}/>

            <div
                className={style.content}
                onClick={() => routeNavigator.push(`/establishment-card?id=${card.id}`)}
            >

                <DescrTag descr={card.rating}/>

                <div className={style.bottomRow}>
                    <div className={style.bottomCol}>
                        <TextM text={card.name} color={"#FFFFFF"}/>
                        <CategoryKitchenRow
                            category={card.category}
                            kitchen={card.kitchen}
                        />

                    </div>

                </div>

            </div>

            <LikeButton
                isLiked={isLiked}
                setLiked={() => handleLike()}
            />

        </div>
    )
}