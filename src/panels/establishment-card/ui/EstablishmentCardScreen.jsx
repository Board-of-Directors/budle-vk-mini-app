import style from "./EsatblishmentCardScreen.module.css"
import EstablishmentPhotoCard from "../../../entities/establishment-photo-card/ui/EstablishmentPhotoCard";
import RatingRow from "../../../entities/rating-row/RatingRow";
import FilterTagRow from "../../../entities/filter-tag-row/ui/FilterTagRow";
import EstablishmentDescription from "../../../entities/establishment-description/ui/EstablishmentDescription";
import PhotoCardGrid from "../../../entities/photo-card-grid/ui/PhotoCardGrid";
import WorkingHoursRow from "../../../shared/rows/working-hours-row/WorkingHoursRow";
import AddressRow from "../../../shared/rows/address-row/AddressRow";
import {Panel} from "@vkontakte/vkui";
import {useSearchParams} from "@vkontakte/vk-mini-apps-router";
import {useEstablishmentCardStore} from "../model/EstablishmentCardStore";
import {useShallow} from "zustand/react/shallow";
import {useEffect} from "react";

const EstablishmentCardScreen = (props) => {

    const mockActiveTag = {id: 0, name: ""}

    const [searchParams] = useSearchParams();
    const establishmentId = searchParams.get("id")

    const [establishmentInfo, getEstablishmentInfo] = useEstablishmentCardStore(
        useShallow((state) => [state.establishment, state.getEstablishment])
    )

    useEffect(() => {
        getEstablishmentInfo(establishmentId)
    }, [])

    useEffect(() => {
        console.log(establishmentInfo)
    }, [establishmentInfo])


    return (
        <Panel nav={props.nav}>
            {
                establishmentInfo === null ? null :
                    <div>
                        <EstablishmentPhotoCard
                            image={establishmentInfo.image}
                            name={establishmentInfo.name}
                            category={"Рестораны"}
                            kitchen={establishmentInfo.cuisineCountry}
                        />
                        <div className={style.wrapper}>
                            <RatingRow rating={establishmentInfo.rating}/>
                            <FilterTagRow activeTag={mockActiveTag}/>
                            <EstablishmentDescription description={establishmentInfo.description}/>
                            <PhotoCardGrid photos={[]}/>
                            <WorkingHoursRow workingHours={establishmentInfo.workingHours} />
                            <AddressRow
                                subway={establishmentInfo.subway}
                                address={establishmentInfo.address}
                            />
                        </div>
                    </div>
            }
        </Panel>
    )
}

export default EstablishmentCardScreen