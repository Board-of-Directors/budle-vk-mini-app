import style from "./EstablishmentCard.module.css"
import TextS from "../../../shared/text/text-s/TextS";
import DescrTag from "../../../shared/tags/descr-tag/DescrTag";
import StarRow from "../../../shared/rows/star-row/StarRow";

export const EstablishmentCard = ({card, onClick}) => {

    return (
        <div className={style.wrapper} onClick={() => onClick()}>

            <img src={card.image} className={style.image} alt={"Card image"}/>

            <div className={style.gradient}/>

            <div className={style.content}>

                {
                    card.category === "Отели" ? <StarRow amount={card.stars}/> : null
                }

                <div className={style.bottomCol}>
                    <TextS text={card.name} color={"#FFFFFF"}/>
                    <DescrTag descr={card.rating}/>
                </div>

            </div>

        </div>
    )
}