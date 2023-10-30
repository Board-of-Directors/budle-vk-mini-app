import style from "./EstablishmentCard.module.css"
import TextS from "../../../shared/text/text-s/TextS";
import DescrTag from "../../../shared/tags/descr-tag/DescrTag";
import StarRow from "../../../shared/rows/star-row/StarRow";
import Base64Image from "../../../shared/cards/base64-image/Base64Image";

export const EstablishmentCard = ({card, fullWidth = false, onClick}) => {

    return (
        <div
            style={{width: fullWidth ? "100%" : "150px"}}
            className={style.wrapper}
            onClick={() => onClick()}
        >

            <Base64Image
                data={card.image}
                className={style.image}
            />

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