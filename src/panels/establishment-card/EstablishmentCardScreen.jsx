import style from "./EsatblishmentCardScreen.module.css"
import EstablishmentPhotoCard from "../../entities/establishment-photo-card/ui/EstablishmentPhotoCard";
import RatingRow from "../../entities/rating-row/RatingRow";
import FilterTagRow from "../../entities/filter-tag-row/ui/FilterTagRow";
import EstablishmentDescription from "../../entities/establishment-description/ui/EstablishmentDescription";
import PhotoCardGrid from "../../entities/photo-card-grid/ui/PhotoCardGrid";
import WorkingHoursRow from "../../shared/rows/working-hours-row/WorkingHoursRow";
import AddressRow from "../../shared/rows/address-row/AddressRow";
import {Panel} from "@vkontakte/vkui";

const description = `Уютный семейный ресторан Мама Дома —
это чудесная локация с камином, глубокими креслами и идеальной
для общения с близкими атмосферой. В меню объединились итальянские
и русские рецепты, современные европейские гастрономические тренды
и экспериментальные сочетания вкусов.`

const EstablishmentCardScreen = (props) => {

    const mockActiveTag = {id:0, name: ""}

    return (
        <Panel nav={props.nav}>
            <EstablishmentPhotoCard
                image={"image-1.png"}
                category={"Рестораны"}
                kitchen={"Грузинская"}
                name={"Горячий цех"}
                rating={"4.2"}
            />
            <div className={style.wrapper}>
                <RatingRow rating={"4.2"}/>
                <FilterTagRow activeTag={mockActiveTag} setActiveTag={() => {}}/>
                <EstablishmentDescription description={description}/>
                <PhotoCardGrid photos={[]} />
                <WorkingHoursRow />
                <AddressRow />
            </div>
        </Panel>
    )
}

export default EstablishmentCardScreen