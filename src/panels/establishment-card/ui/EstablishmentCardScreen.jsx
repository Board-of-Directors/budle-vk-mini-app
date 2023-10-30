import style from "./EsatblishmentCardScreen.module.css"
import EstablishmentPhotoCard from "../../../entities/establishment-photo-card/ui/EstablishmentPhotoCard";
import RatingRow from "../../../entities/rating-row/RatingRow";
import FilterTagRow from "../../../entities/filter-tag-row/ui/FilterTagRow";
import EstablishmentDescription from "../../../entities/establishment-description/ui/EstablishmentDescription";
import PhotoCardGrid from "../../../entities/photo-card-grid/ui/PhotoCardGrid";
import WorkingHoursRow from "../../../shared/rows/working-hours-row/WorkingHoursRow";
import AddressRow from "../../../shared/rows/address-row/AddressRow";
import {Panel} from "@vkontakte/vkui";
import {useRouteNavigator, useSearchParams} from "@vkontakte/vk-mini-apps-router";
import {useStore} from "../../../store/Store";
import {useShallow} from "zustand/react/shallow";
import {useEffect} from "react";
import Button from "../../../shared/buttons/button/Button";
import {filterTagsData} from "../../../entities/filter-tag-row/model/filterTagsData";

const EstablishmentCardScreen = (props) => {

    const routeNavigator = useRouteNavigator()

    const mockActiveTag = {id: 0, name: ""}

    const [searchParams] = useSearchParams();
    const establishmentId = searchParams.get("id")

    const [establishmentInfo, getEstablishmentInfo] = useStore(
        useShallow((state) => [state.establishment, state.getEstablishment])
    )

    useEffect(() => {
        getEstablishmentInfo(establishmentId)
    }, [])

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
                            <FilterTagRow
                                tagList={filterTagsData}
                                activeTag={mockActiveTag}
                                setActive={() => {}}
                            />
                            <EstablishmentDescription description={establishmentInfo.description}/>
                            <PhotoCardGrid photos={[]}/>
                            <WorkingHoursRow workingHours={establishmentInfo.workingHours}/>
                            <AddressRow
                                subway={establishmentInfo.subway}
                                address={establishmentInfo.address}
                            />
                            <Button
                                text={"Забронировать место"}
                                onClick={() => routeNavigator.push(
                                    `/establishment-card/${establishmentId}/booking`
                                )}
                            />
                        </div>
                    </div>
            }
        </Panel>
    )
}

export default EstablishmentCardScreen