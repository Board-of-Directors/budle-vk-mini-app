import style from "./FilterTagRow.module.css"
import {FilterTag} from "../../../shared/tags/filter-tag/FilterTag";
import {filterTagsData} from "../model/filterTagsData";

export const FilterTagRow = (props) => {
    return (
        <div className={style.wrapper}>
            {
                filterTagsData.map((tag) => {
                    return <FilterTag
                        activeTag={props.activeTag}
                        setActive={props.setActive}
                        tag={tag}
                    />
                })
            }
        </div>
    )
}

export default FilterTagRow