import style from "./PhotoCard.module.css"
import TextL from "../../text/text-l/TextL";

const PhotoCard = (props) => {
    return (
        <div className={style.wrapper}>
            {
                props.isLast ?

                    <div className={style.overlayBox}>

                        <div className={style.restPhotos}>
                            <TextL text={props.rest} />
                        </div>

                        <div className={style.overlay}/>

                    </div> : null
            }
            <img
                src={props.img}
                className={style.image}
                alt={"/"}
                onClick={() => props.onClick()}
            />
        </div>
    )
}

export default PhotoCard