import style from "./PhotoCardGrid.module.css"
import PhotoCard from "../../../shared/cards/photo-card/PhotoCard";
import HeaderContentCol from "../../../shared/wrappers/header-content-col/HeaderContentCol";

const PhotoCardGrid = (props) => {
    return (
        <HeaderContentCol header={"Фотографии"}>
            <div className={style.gridDiv}>
                {
                    props.photos.map((photo, index) => {
                        if (index < 6) {
                            return <PhotoCard
                                isLast={index === 5}
                                rest={photos.length - 6}
                                img={photo.img}
                                onClick={() => {}}
                            />
                        }
                    })
                }
            </div>
        </HeaderContentCol>
    )
}

export default PhotoCardGrid