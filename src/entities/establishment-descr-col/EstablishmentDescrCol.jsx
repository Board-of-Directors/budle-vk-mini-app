import style from "./EstablishmentDescrCol.module.css"
import TextM from "../../shared/text/text-m/TextM";
import CategoryKitchenRow from "../../shared/rows/category-kitchen-row/CategoryKitchenRow";
import TextS from "../../shared/text/text-s/TextS";

const EstablishmentDescrCol = ({card}) => {
    return (
        <div className={style.wrapper}>
            <TextM text={card.name}/>
            <CategoryKitchenRow
                category={card.category}
                kitchen={card.cuisineCountry}
            />
            <TextS text={card.address} />
        </div>
    );
};

export default EstablishmentDescrCol;
