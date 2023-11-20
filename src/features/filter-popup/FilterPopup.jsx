import PopupWrapper from "../popup-wrapper/PopupWrapper";
import TextM from "../../shared/text/text-m/TextM";


const EstablishmentTypesBlock = () => {

    const mockFilters = []

    return (
        <div className={""}>
            <TextM text={"Типы заведений"}>
                {
                    mockFilters.map((item) => {
                        return <div></div>
                    })
                }
            </TextM>
        </div>
    )
}

const FilterPopup = ({onClose}) => {
    return (
        <PopupWrapper header={"Фильтры"} onClose={onClose}>

        </PopupWrapper>
    );
};

export default FilterPopup;
