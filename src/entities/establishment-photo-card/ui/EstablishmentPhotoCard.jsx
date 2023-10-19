import style from "./EstablishmentPhotoCard.module.css"
import CloseButton from "../../../shared/buttons/close-button/CloseButton";
import CategoryKitchenRow from "../../../shared/rows/category-kitchen-row/CategoryKitchenRow";
import Text2XL from "../../../shared/text/text-2xl/Text2XL";
import DescrTag from "../../../shared/tags/descr-tag/DescrTag";
import {useRouteNavigator} from "@vkontakte/vk-mini-apps-router";
import Base64Image from "../../../shared/cards/base64-image/Base64Image";

const EstablishmentPhotoCard = (props) => {

    const routeNavigator = useRouteNavigator();

    return (
        <div className={style.wrapper}>

            <div className={style.overlay}/>
            <Base64Image data={props.image} className={style.image}/>

            <div className={style.closeBtn}>
                <CloseButton onClick={() => routeNavigator.push('/')}/>
            </div>

            <div className={style.contentRow}>

                <div className={style.descrCol}>

                    <CategoryKitchenRow
                        category={props.category}
                        kitchen={props.kitchen}
                    />

                    <Text2XL text={props.name} color={"#FFFFFF"}/>

                </div>

                <DescrTag descr={"7 фото"}/>

            </div>
        </div>
    )
}

export default EstablishmentPhotoCard