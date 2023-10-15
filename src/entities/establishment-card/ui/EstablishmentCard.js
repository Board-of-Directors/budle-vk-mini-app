import style from "./EstablishmentCard.module.css"
import TextS from "../../../shared/text/text-s/TextS";
import RatingTag from "../../../shared/tags/rating-tag/RatingTag";
import StarRow from "../../../shared/rows/star-row/StarRow";

export const EstablishmentCard = ({card}) => {

    return (
        <div className={style.wrapper}>

            <img src={card.image} className={style.image} alt={"Card image"}/>

            <div className={style.gradient}/>

            <div className={style.content}>

                {
                    card.category === "Отели" ? <StarRow amount={card.stars}/> : null
                }

                <div className={style.bottomCol}>
                    <TextS text={card.name} color={"#FFFFFF"}/>
                    <RatingTag number={card.rating}/>
                </div>

            </div>

        </div>
    )
}